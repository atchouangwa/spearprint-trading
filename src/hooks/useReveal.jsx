import { createContext, useContext, useEffect, useMemo, useRef } from 'react';

const RevealContext = createContext(null);

export function RevealProvider({ children, disabled = false }) {
  const observerRef = useRef(null);

  const reducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const active = !disabled && !reducedMotion;

  const getObserver = () => {
    if (!active) return null;
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            setTimeout(() => {
              el.classList.add('sp-reveal-visible');
            }, i * 50);
            observerRef.current.unobserve(el);
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
      );
    }
    return observerRef.current;
  };

  useEffect(
    () => () => {
      if (observerRef.current) observerRef.current.disconnect();
    },
    []
  );

  const value = useMemo(() => ({ active, getObserver }), [active]);

  return <RevealContext.Provider value={value}>{children}</RevealContext.Provider>;
}

export function Reveal({ children, as: Component = 'div', className = '', style, ...rest }) {
  const ctx = useContext(RevealContext);
  const ref = useRef(null);

  useEffect(() => {
    if (!ctx || !ctx.active || !ref.current) return undefined;
    const observer = ctx.getObserver();
    if (!observer) return undefined;
    observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
  }, [ctx]);

  const revealClass = ctx && ctx.active ? 'sp-reveal' : '';

  return (
    <Component ref={ref} className={[revealClass, className].filter(Boolean).join(' ')} style={style} {...rest}>
      {children}
    </Component>
  );
}

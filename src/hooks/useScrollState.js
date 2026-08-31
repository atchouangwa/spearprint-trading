import { useEffect, useState } from 'react';

export function useScrollState({ stickyMobileCta = true } = {}) {
  const [sticky, setSticky] = useState(false);
  const [wide, setWide] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const co = document.getElementById('checkout');
      const nearCheckout = co ? y + window.innerHeight > co.offsetTop + 120 : false;
      const narrow = window.innerWidth < 860;
      const next = narrow && y > window.innerHeight * 0.75 && !nearCheckout;
      const isWide = window.innerWidth >= 760;

      setSticky((prev) => (prev !== next ? next : prev));
      setWide((prev) => (prev !== isWide ? isWide : prev));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return {
    wideNav: wide,
    showSticky: stickyMobileCta === false ? false : sticky,
  };
}

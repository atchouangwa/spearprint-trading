import { useEffect, useRef } from 'react';

const LOADER_SRC = 'https://js.whop.com/static/checkout/loader.js';
const PLAN_ID = 'plan_6sE3OXV6B1NAE';

function ensureLoaderScript() {
  if (document.querySelector(`script[src="${LOADER_SRC}"]`)) return;
  const script = document.createElement('script');
  script.src = LOADER_SRC;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Whop's checkout embed mounts itself into any element carrying these
// data attributes once js.whop.com/static/checkout/loader.js has loaded.
// The return URL currently points back at this same page; if a dedicated
// post-purchase confirmation route is added later, point it there instead.
export default function WhopCheckout() {
  const containerRef = useRef(null);

  useEffect(() => {
    ensureLoaderScript();
  }, []);

  const returnUrl = typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : '';

  return (
    <div
      ref={containerRef}
      data-whop-checkout-plan-id={PLAN_ID}
      data-whop-checkout-theme="dark"
      data-whop-checkout-return-url={returnUrl}
      style={{ minHeight: 620, width: '100%' }}
    />
  );
}

export { PLAN_ID as WHOP_PLAN_ID };

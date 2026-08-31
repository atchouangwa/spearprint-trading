import { Reveal } from '../hooks/useReveal.jsx';
import WhopCheckout, { WHOP_PLAN_ID } from '../components/WhopCheckout.jsx';

export default function Checkout() {
  return (
    <section id="checkout" style={{ padding: '96px clamp(20px,5vw,32px) 128px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
          <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#6E6E6A' }}>10 / CHECKOUT</div>
          <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.16em', color: '#A7A6A1' }}>
            ELITE / 3 MONTHS / $2,000
          </div>
        </Reveal>

        <Reveal style={{ border: '1px solid rgba(255,255,255,0.12)', background: '#111212', minHeight: 620, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              padding: '18px 24px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: "'Geist Mono',monospace",
              fontSize: 10,
              letterSpacing: '0.16em',
              color: '#6E6E6A',
            }}
          >
            <span>WHOP CHECKOUT</span>
            <span>{WHOP_PLAN_ID}</span>
          </div>

          <div style={{ flex: 1, display: 'flex' }}>
            <WhopCheckout />
          </div>

          <div style={{ padding: '18px 24px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: '#6E6E6A' }}>
            Payment is handled entirely by Whop. SpearPrint never sees or stores your card details.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

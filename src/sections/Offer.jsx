import { Reveal } from '../hooks/useReveal.jsx';

const INCLUDES = [
  'Private coaching',
  'Trade reviews',
  'Risk-management refinement',
  'Psychology coaching',
  'Execution feedback',
  'Personalized development priorities',
  'Accountability throughout the mentorship',
];

export default function Offer() {
  return (
    <section id="offer" style={{ padding: 'clamp(80px,10vw,128px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ border: '1px solid rgba(255,255,255,0.12)', background: '#111212' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px, 100%), 1fr))' }}>
            <div style={{ padding: '56px 48px', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#C6A15B', marginBottom: 32 }}>
                SPEARPRINT TRADING ELITE
              </div>
              <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.2vw,44px)', lineHeight: 1.06, letterSpacing: '-0.024em', fontWeight: 400 }}>
                Private 1-on-1
                <br />
                Mentorship
              </h2>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 20,
                  flexWrap: 'wrap',
                  marginTop: 48,
                  paddingTop: 32,
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span style={{ fontSize: 'clamp(42px,9vw,56px)', letterSpacing: '-0.03em', lineHeight: 1 }}>$2,000</span>
                <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.18em', color: '#A7A6A1' }}>
                  3 MONTHS
                  <br />
                  ONE-TIME
                </span>
              </div>
              <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
                <a
                  href="#checkout"
                  className="sp-cta"
                  style={{
                    background: '#C6A15B',
                    color: '#0B0C0C',
                    fontSize: 13.5,
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    padding: '17px 30px',
                  }}
                >
                  START YOUR ELITE MENTORSHIP
                </a>
                <span style={{ fontSize: 13, color: '#6E6E6A', lineHeight: 1.55, maxWidth: '34ch' }}>
                  Secure checkout powered by Whop. You&rsquo;ll book your first session straight after payment.
                </span>
              </div>
            </div>

            <div style={{ padding: '56px 48px', background: '#0C0D0D' }}>
              <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: '0.2em', color: '#6E6E6A', marginBottom: 28 }}>
                INCLUDES
              </div>
              <div style={{ display: 'grid', gap: 0 }}>
                {INCLUDES.map((item, i, arr) => (
                  <div
                    key={item}
                    style={{
                      padding: '16px 0',
                      borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                      fontSize: 17,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Reveal } from '../hooks/useReveal.jsx';

const REVIEW = [
  { title: 'PLAN', sub: 'Setup criteria and predefined risk', note: 'Entry matched plan.' },
  { title: 'EXECUTION', sub: 'Entry, add, and exit timing', note: 'Exit changed after volatility increased.' },
  { title: 'RISK', sub: 'Size, stop, and loss limits', note: 'Risk exceeded predefined limit.' },
  { title: 'PSYCHOLOGY', sub: 'State before and during the trade', note: 'Journal indicates hesitation after previous loss.' },
  { title: 'REVIEW', sub: 'What the next two weeks focus on', note: 'Review priority: execution discipline.' },
];

const MARKERS = [
  { left: '28%', top: '52%' },
  { left: '50%', top: '40%' },
  { left: '72%', top: '26%' },
];

export default function TradeReview() {
  const [active, setActive] = useState(1);

  const mkOpacity = [
    active === 0 || active === 1 ? 1 : 0.25,
    active === 2 || active === 3 ? 1 : 0.25,
    active === 4 ? 1 : 0.25,
  ];

  return (
    <section id="how" style={{ padding: 'clamp(80px,10vw,128px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#0C0D0D' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(380px, 100%), 1fr))',
            gap: 64,
            alignItems: 'end',
            marginBottom: 64,
          }}
        >
          <div>
            <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#6E6E6A', marginBottom: 28 }}>
              05 / TRADE REVIEW
            </div>
            <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,50px)', lineHeight: 1.08, letterSpacing: '-0.024em', fontWeight: 400 }}>
              What a review actually looks like.
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: '48ch', fontSize: 18, lineHeight: 1.65, color: '#A7A6A1' }}>
            Five components, reviewed every session. Select one to see the kind of written observation it produces.
            Illustrative example &mdash; not a client trade.
          </p>
        </Reveal>

        <Reveal style={{ border: '1px solid rgba(255,255,255,0.1)', background: '#111212' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px, 100%), 1fr))' }}>
            <div style={{ padding: 32, borderRight: '1px solid rgba(255,255,255,0.08)', position: 'relative', minHeight: 420 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: "'Geist Mono',monospace",
                  fontSize: 10,
                  letterSpacing: '0.16em',
                  color: '#6E6E6A',
                  marginBottom: 24,
                }}
              >
                <span>ES / 5M / ILLUSTRATIVE</span>
                <span>FOCUS / {REVIEW[active].title}</span>
              </div>

              <div
                style={{
                  position: 'relative',
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
                  backgroundSize: '100% 44px,64px 100%',
                  borderLeft: '1px solid rgba(255,255,255,0.08)',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  height: 300,
                }}
              >
                <svg viewBox="0 0 480 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                  <line x1="0" y1="86" x2="480" y2="86" stroke="rgba(198,161,91,0.35)" strokeWidth="1" strokeDasharray="4 6" />
                  <line x1="0" y1="232" x2="480" y2="232" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="4 6" />
                  <polyline
                    points="0,220 48,206 96,228 144,178 192,196 240,132 288,158 336,104 384,132 432,74 480,102"
                    fill="none"
                    stroke="#F2F1ED"
                    strokeWidth="1.4"
                  />
                </svg>
                {MARKERS.map((m, i) => (
                  <div
                    key={m.left}
                    style={{
                      position: 'absolute',
                      left: m.left,
                      top: m.top,
                      transform: 'translate(-50%,-50%)',
                      transition: 'opacity 220ms ease,transform 220ms cubic-bezier(0.23,1,0.32,1)',
                      opacity: mkOpacity[i],
                    }}
                  >
                    <span style={{ display: 'block', width: 9, height: 9, border: '1.25px solid #C6A15B', borderRadius: '50%', background: '#111212' }} />
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: '0.16em', color: '#C6A15B', marginBottom: 12 }}>
                  OBSERVATION
                </div>
                <p style={{ margin: 0, fontSize: 19, lineHeight: 1.5, color: '#F2F1ED', minHeight: 58, transition: 'opacity 200ms ease', opacity: 1 }}>
                  {REVIEW[active].note}
                </p>
              </div>
            </div>

            <div>
              {REVIEW.map((r, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={r.title}
                    onClick={() => setActive(i)}
                    role="button"
                    tabIndex={0}
                    className="sp-row-item"
                    style={{
                      padding: '24px 28px',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                      cursor: 'pointer',
                      display: 'flex',
                      gap: 20,
                      alignItems: 'baseline',
                      transition: 'background-color 160ms ease',
                      background: isActive ? '#151616' : 'transparent',
                    }}
                  >
                    <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: '0.14em', color: isActive ? '#C6A15B' : '#4E4F4E', flex: '0 0 22px' }}>
                      {'0' + (i + 1)}
                    </span>
                    <span style={{ flex: 1 }}>
                      <span
                        style={{
                          display: 'block',
                          fontFamily: "'Geist Mono',monospace",
                          fontSize: 11,
                          letterSpacing: '0.18em',
                          color: isActive ? '#C6A15B' : '#A7A6A1',
                        }}
                      >
                        {r.title}
                      </span>
                      <span style={{ display: 'block', fontSize: 15, lineHeight: 1.5, color: '#A7A6A1', marginTop: 8 }}>{r.sub}</span>
                    </span>
                    <span style={{ width: 16, height: 1, background: isActive ? '#C6A15B' : 'rgba(255,255,255,0.14)', transition: 'background-color 160ms ease', marginTop: 8 }} />
                  </div>
                );
              })}
              <div style={{ padding: '20px 28px', fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: '0.14em', color: '#4E4F4E', lineHeight: 1.7 }}>
                ILLUSTRATIVE EXAMPLE. NOT A CLIENT TRADE.
                <br />
                NO PERFORMANCE OR RESULT IS SHOWN.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

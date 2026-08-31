import { Reveal } from '../hooks/useReveal.jsx';

const ROWS = [
  { label: 'COURSE', quote: '“Here’s how risk management works.”' },
  { label: 'YOUTUBE', quote: '“Here’s a setup.”' },
  { label: 'SIGNALS', quote: '“Take this trade.”' },
];

const ELITE_LINES = [
  '“Here’s where your risk process broke down.”',
  '“Here’s why you keep entering this setup late.”',
  '“Learn to make and evaluate your own decisions.”',
];

export default function WhyOneOnOne() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,128px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ maxWidth: 760, marginBottom: 80 }}>
          <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#6E6E6A', marginBottom: 28 }}>
            04 / WHY 1-ON-1
          </div>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,50px)', lineHeight: 1.08, letterSpacing: '-0.024em', fontWeight: 400 }}>
            Generic advice can&rsquo;t diagnose your trading.
          </h2>
        </Reveal>

        <Reveal style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px, 100%), 1fr))',
                gap: '8px 64px',
                padding: '36px 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div>
                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: '0.18em', color: '#6E6E6A', marginBottom: 12 }}>
                  {row.label}
                </div>
                <div style={{ fontSize: 20, lineHeight: 1.4, color: '#6E6E6A' }}>{row.quote}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: '0.18em', color: '#C6A15B', marginBottom: 12 }}>
                  ELITE
                </div>
                <div style={{ fontSize: 20, lineHeight: 1.4, color: '#F2F1ED' }}>{ELITE_LINES[i]}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

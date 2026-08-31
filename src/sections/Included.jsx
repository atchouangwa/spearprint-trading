import { Reveal } from '../hooks/useReveal.jsx';

const CARDS = [
  { label: 'TRADE REVIEWS', body: 'Break down actual decisions and identify where execution or planning broke down.' },
  { label: 'RISK MANAGEMENT', body: 'Refine position sizing, risk limits, stop discipline, and loss management.' },
  {
    label: 'TRADING PSYCHOLOGY',
    body: 'Identify behavioral patterns behind hesitation, overtrading, revenge trading, and impulsive decisions.',
  },
  { label: 'EXECUTION REFINEMENT', body: 'Improve the connection between your trading plan and your behavior in live markets.' },
  { label: 'ACCOUNTABILITY', body: 'Create a feedback loop that makes recurring mistakes visible.' },
];

const TAGS = ['Your entries.', 'Your exits.', 'Your risk.', 'Your psychology.', 'Your execution.', 'Your recurring mistakes.'];

export default function Included() {
  return (
    <section id="included" style={{ padding: 'clamp(80px,10vw,128px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#0C0D0D' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(400px, 100%), 1fr))',
            gap: 80,
            alignItems: 'end',
            marginBottom: 96,
          }}
        >
          <Reveal>
            <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#6E6E6A', marginBottom: 28 }}>
              03 / INTRODUCING ELITE
            </div>
            <h2 style={{ margin: 0, fontSize: 'clamp(34px,4.2vw,58px)', lineHeight: 1.04, letterSpacing: '-0.026em', fontWeight: 400 }}>
              Your Trading.
              <br />
              Under a Microscope.
            </h2>
          </Reveal>
          <Reveal>
            <p style={{ margin: 0, maxWidth: '52ch', fontSize: 19, lineHeight: 1.65, color: '#A7A6A1' }}>
              SpearPrint Trading Elite is our highest level of mentorship for traders who want individualized coaching rather
              than more generic education.
            </p>
            <p style={{ margin: '20px 0 0', maxWidth: '52ch', fontSize: 19, lineHeight: 1.65, color: '#A7A6A1' }}>
              For three months, the coaching focuses on your trading:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', marginTop: 24, fontSize: 17, color: '#F2F1ED' }}>
              {TAGS.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px, 100%), 1fr))',
            gap: 1,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div
            style={{
              background: '#151616',
              padding: '48px 40px',
              gridColumn: 'span 1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 48,
              minHeight: 340,
            }}
          >
            <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: '0.2em', color: '#C6A15B' }}>CORE MECHANISM</div>
            <div>
              <h3 style={{ margin: 0, fontSize: 30, lineHeight: 1.14, letterSpacing: '-0.02em', fontWeight: 400 }}>Private 1-on-1 Coaching</h3>
              <p style={{ margin: '18px 0 0', fontSize: 17, lineHeight: 1.6, color: '#A7A6A1', maxWidth: '32ch' }}>
                Personalized coaching centered on your current level, goals, and weaknesses.
              </p>
            </div>
          </div>

          {CARDS.map((card) => (
            <div key={card.label} style={{ background: '#0C0D0D', padding: '36px 32px' }}>
              <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: '0.18em', color: '#6E6E6A' }}>{card.label}</div>
              <p style={{ margin: '20px 0 0', fontSize: 17, lineHeight: 1.6, color: '#A7A6A1' }}>{card.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

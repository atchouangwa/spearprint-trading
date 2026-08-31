import { Reveal } from '../hooks/useReveal.jsx';

const FIT_ITEMS = [
  'You understand trading fundamentals',
  'You repeat the same mistakes',
  'You want feedback on actual trades',
  'Your discipline breaks down under pressure',
  'You want stronger risk rules',
  'You need accountability',
  'You are willing to journal and review',
];

const NOT_FIT_ITEMS = [
  'You want guaranteed profits',
  'You only want signals',
  'You expect someone else to make trading decisions',
  'You want overnight results',
  'You refuse to review mistakes',
  'You are unwilling to follow a process',
];

export default function Fit() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,128px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#0C0D0D' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px, 100%), 1fr))',
          gap: 80,
          alignItems: 'start',
        }}
      >
        <Reveal>
          <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#6E6E6A', marginBottom: 28 }}>
            09 / FIT
          </div>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.1vw,44px)', lineHeight: 1.1, letterSpacing: '-0.022em', fontWeight: 400, maxWidth: '22ch' }}>
            Elite is built for traders who take improvement seriously.
          </h2>
          <div style={{ marginTop: 44, display: 'grid' }}>
            {FIT_ITEMS.map((item, i, arr) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  gap: 20,
                  padding: '18px 0',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  borderBottom: i === arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  fontSize: 18,
                  color: '#F2F1ED',
                }}
              >
                <span style={{ color: '#C6A15B', fontFamily: "'Geist Mono',monospace", fontSize: 12, paddingTop: 4 }}>&#10003;</span>
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal style={{ paddingTop: 80 }}>
          <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: '#6E6E6A', marginBottom: 24 }}>
            NOT A FIT IF
          </div>
          <div style={{ display: 'grid', gap: 14, fontSize: 16, lineHeight: 1.55, color: '#6E6E6A', maxWidth: '44ch' }}>
            {NOT_FIT_ITEMS.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
          <p style={{ margin: '32px 0 0', maxWidth: '40ch', fontSize: 15, lineHeight: 1.6, color: '#4E4F4E' }}>
            If that describes where you are right now, this is the wrong three months to spend $2,000 on. A fit question, not
            a judgement.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

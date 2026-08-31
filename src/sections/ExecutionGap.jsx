import { Reveal } from '../hooks/useReveal.jsx';

const PLAN_ITEMS = ['Wait for setup', 'Risk 1R', 'Respect stop', 'Follow exit criteria'];
const EXECUTION_ITEMS = ['Enter early', 'Increase size', 'Move stop', 'Exit emotionally'];

export default function ExecutionGap() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,128px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#0C0D0D' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(400px, 100%), 1fr))',
          gap: 80,
          alignItems: 'start',
        }}
      >
        <Reveal>
          <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#6E6E6A', marginBottom: 28 }}>
            02 / THE EXECUTION GAP
          </div>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,50px)', lineHeight: 1.08, letterSpacing: '-0.024em', fontWeight: 400, maxWidth: '17ch' }}>
            You can know exactly what to do and still trade poorly.
          </h2>
          <p style={{ margin: '28px 0 0', maxWidth: '42ch', fontSize: 19, lineHeight: 1.65, color: '#A7A6A1' }}>
            You write the plan when nothing is at stake. You make the decisions when everything is. That gap is where most
            accounts are lost.
          </p>
          <p style={{ margin: '16px 0 0', maxWidth: '42ch', fontSize: 19, lineHeight: 1.65, color: '#A7A6A1' }}>
            No course closes that gap, because a course never sees your trades. It closes when someone reviews what you
            actually did, trade by trade.
          </p>
        </Reveal>

        <Reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(230px, 100%), 1fr))',
            gap: 1,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div style={{ background: '#0C0D0D', padding: '28px 24px' }}>
            <div
              style={{
                fontFamily: "'Geist Mono',monospace",
                fontSize: 10,
                letterSpacing: '0.18em',
                color: '#6E6E6A',
                paddingBottom: 20,
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              THE PLAN
            </div>
            <div style={{ paddingTop: 20, display: 'grid', gap: 16, fontSize: 16.5, color: '#F2F1ED' }}>
              {PLAN_ITEMS.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>

          <div style={{ background: '#111212', padding: '28px 24px' }}>
            <div
              style={{
                fontFamily: "'Geist Mono',monospace",
                fontSize: 10,
                letterSpacing: '0.18em',
                color: '#C6A15B',
                paddingBottom: 20,
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              ACTUAL EXECUTION
            </div>
            <div style={{ paddingTop: 20, display: 'grid', gap: 16, fontSize: 16.5, color: '#A7A6A1' }}>
              {EXECUTION_ITEMS.map((item) => (
                <div key={item} style={{ display: 'flex', gap: 10 }}>
                  <span style={{ color: '#C6A15B', fontFamily: "'Geist Mono',monospace", fontSize: 12, paddingTop: 3 }}>&rarr;</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

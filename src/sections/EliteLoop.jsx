import { Reveal } from '../hooks/useReveal.jsx';

const STEPS = [
  { num: '01', label: 'Plan', note: 'written before the session' },
  { num: '02', label: 'Execute', note: 'logged, not remembered' },
  { num: '03', label: 'Review', note: 'together, on the record' },
  { num: '04', label: 'Diagnose', note: 'one priority at a time' },
  { num: '05', label: 'Refine', note: 'then back to the plan' },
];

const WHEEL_LABELS = [
  { text: 'PLAN', pos: { left: '50%', top: 0, transform: 'translateX(-50%)' }, accent: false },
  { text: 'EXECUTE', pos: { right: 0, top: '33%', transform: 'translateY(-50%)' }, accent: false },
  { text: 'REVIEW', pos: { right: '6%', top: '92%', transform: 'translateY(-50%)' }, accent: false },
  { text: 'DIAGNOSE', pos: { left: '6%', top: '92%', transform: 'translateY(-50%)' }, accent: true },
  { text: 'REFINE', pos: { left: 0, top: '33%', transform: 'translateY(-50%)' }, accent: false },
];

export default function EliteLoop() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,128px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(380px, 100%), 1fr))',
          gap: 80,
          alignItems: 'center',
        }}
      >
        <Reveal>
          <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#6E6E6A', marginBottom: 28 }}>
            06 / FRAMEWORK
          </div>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,50px)', lineHeight: 1.08, letterSpacing: '-0.024em', fontWeight: 400, maxWidth: '16ch' }}>
            The Elite Development Loop
          </h2>
          <p style={{ margin: '28px 0 0', maxWidth: '44ch', fontSize: 19, lineHeight: 1.65, color: '#A7A6A1' }}>
            Trading improvement should be a feedback loop, not an endless search for a new strategy.
          </p>
          <div
            style={{
              marginTop: 40,
              display: 'grid',
              gap: 1,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.08)',
              maxWidth: 420,
            }}
          >
            {STEPS.map((step) => (
              <div key={step.num} style={{ background: '#090A0A', padding: '16px 20px', display: 'flex', gap: 16, alignItems: 'baseline' }}>
                <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#C6A15B' }}>{step.num}</span>
                <span style={{ fontSize: 16 }}>{step.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: 14, color: '#6E6E6A' }}>{step.note}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: 'min(420px,100%)', aspectRatio: '1/1' }}>
            <div style={{ position: 'absolute', inset: '8%', border: '1px dashed rgba(198,161,91,0.28)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', inset: '26%', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 9.5, letterSpacing: '0.2em', color: '#6E6E6A', lineHeight: 1.8 }}>
                THE ELITE
                <br />
                DEVELOPMENT
                <br />
                LOOP
              </div>
            </div>
            {WHEEL_LABELS.map((item) => (
              <div
                key={item.text}
                style={{
                  position: 'absolute',
                  ...item.pos,
                  background: '#090A0A',
                  padding: '6px 12px',
                  border: item.accent ? '1px solid rgba(198,161,91,0.4)' : '1px solid rgba(255,255,255,0.1)',
                  fontFamily: "'Geist Mono',monospace",
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  color: item.accent ? '#C6A15B' : '#F2F1ED',
                }}
              >
                {item.text}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

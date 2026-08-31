import { Reveal } from '../hooks/useReveal.jsx';

const CURRENT_STATE = [
  'Reactive decisions',
  'Inconsistent risk',
  'Strategy hopping',
  'Unstructured review',
  'Repeated mistakes',
  'Emotional overrides',
];

const DESIGNED_TO_DEVELOP = [
  'Clearer rules',
  'More deliberate execution',
  'Structured risk',
  'Objective trade review',
  'Greater awareness of triggers',
  'A repeatable improvement process',
];

export default function Shift() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,128px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ maxWidth: 720, marginBottom: 72 }}>
          <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#6E6E6A', marginBottom: 28 }}>
            08 / THE SHIFT
          </div>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,50px)', lineHeight: 1.08, letterSpacing: '-0.024em', fontWeight: 400 }}>
            The goal isn&rsquo;t more trades.
            <br />
            It&rsquo;s better decisions.
          </h2>
        </Reveal>

        <Reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px, 100%), 1fr))',
            gap: 64,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Geist Mono',monospace",
                fontSize: 10,
                letterSpacing: '0.2em',
                color: '#6E6E6A',
                paddingBottom: 20,
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              CURRENT STATE
            </div>
            <div style={{ display: 'grid' }}>
              {CURRENT_STATE.map((item, i, arr) => (
                <div
                  key={item}
                  style={{
                    padding: '22px 0',
                    borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    fontSize: 19,
                    color: '#6E6E6A',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Geist Mono',monospace",
                fontSize: 10,
                letterSpacing: '0.2em',
                color: '#C6A15B',
                paddingBottom: 20,
                borderBottom: '1px solid rgba(198,161,91,0.35)',
              }}
            >
              DESIGNED TO DEVELOP
            </div>
            <div style={{ display: 'grid' }}>
              {DESIGNED_TO_DEVELOP.map((item, i, arr) => (
                <div
                  key={item}
                  style={{
                    padding: '22px 0',
                    borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    fontSize: 19,
                    color: '#F2F1ED',
                  }}
                >
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

import { Reveal } from '../hooks/useReveal.jsx';

const CELLS = [
  'Hesitation',
  'Revenge trading',
  'Overtrading',
  'Moving stops',
  'Oversizing',
  'Emotional decisions',
  'Abandoning the plan',
  'Strategy hopping',
  'Inconsistent risk',
  'Repeating the same mistakes',
];

export default function ProblemRecognition() {
  return (
    <section id="mentorship" style={{ padding: 'clamp(80px,10vw,128px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(380px, 100%), 1fr))',
          gap: 80,
        }}
      >
        <Reveal>
          <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#6E6E6A', marginBottom: 28 }}>
            01 / PROBLEM RECOGNITION
          </div>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,50px)', lineHeight: 1.08, letterSpacing: '-0.024em', fontWeight: 400, maxWidth: '15ch' }}>
            You probably don&rsquo;t need more trading information.
          </h2>
          <p style={{ margin: '28px 0 0', maxWidth: '44ch', fontSize: 19, lineHeight: 1.65, color: '#A7A6A1' }}>
            You may already understand setups, entries, exits, market structure, risk/reward and chart analysis.
          </p>
          <p style={{ margin: '16px 0 0', maxWidth: '44ch', fontSize: 19, lineHeight: 1.65, color: '#A7A6A1' }}>
            Knowledge is rarely the gap. The gap opens the moment a position is live and money is on the line.
          </p>
        </Reveal>

        <Reveal
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            alignSelf: 'start',
          }}
        >
          {CELLS.map((text, i) => {
            const isRight = i % 2 === 1;
            const isLast = i >= CELLS.length - 2;
            const isFinal = i === CELLS.length - 1;
            return (
              <div
                key={text}
                style={{
                  padding: isRight ? '20px 0 20px 20px' : '20px 20px 20px 0',
                  borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.07)',
                  borderLeft: isRight ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  fontSize: 16,
                  color: isFinal ? '#F2F1ED' : '#A7A6A1',
                }}
              >
                {text}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from '../hooks/useReveal.jsx';

const MONTHS = [
  {
    label: 'MONTH 01',
    index: '/01',
    title: 'Diagnose',
    labelColor: '#C6A15B',
    body: 'Review your trading process, execution, risk, psychology and recurring mistakes. Identify the highest-leverage improvement priorities.',
    tags: ['trading process', 'execution', 'risk', 'psychology', 'recurring mistakes'],
  },
  {
    label: 'MONTH 02',
    index: '/02',
    title: 'Refine',
    labelColor: '#F2F1ED',
    body: 'Apply the feedback. Review trades. Strengthen risk rules. Improve execution. Address behavioral patterns.',
    tags: ['applied feedback', 'trade review cadence', 'risk rules', 'behavioral patterns'],
  },
  {
    label: 'MONTH 03',
    index: '/03',
    title: 'Systemize',
    labelColor: '#F2F1ED',
    body: 'Build a process that can continue after mentorship.',
    tags: ['preparation', 'execution rules', 'journaling', 'review', 'risk process', 'accountability'],
  },
];

export default function Roadmap() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,128px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#0C0D0D' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ marginBottom: 80 }}>
          <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#6E6E6A', marginBottom: 28 }}>
            07 / ROADMAP
          </div>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,50px)', lineHeight: 1.08, letterSpacing: '-0.024em', fontWeight: 400, maxWidth: '20ch' }}>
            Three months of deliberate improvement.
          </h2>
        </Reveal>

        <Reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px, 100%), 1fr))',
            gap: 1,
            background: 'rgba(255,255,255,0.08)',
            borderTop: '1px solid rgba(198,161,91,0.35)',
          }}
        >
          {MONTHS.map((month) => (
            <div key={month.label} style={{ background: '#0C0D0D', padding: '40px 32px 48px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
                <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: month.labelColor }}>
                  {month.label}
                </span>
                <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: '#4E4F4E' }}>{month.index}</span>
              </div>
              <h3 style={{ margin: 0, fontSize: 30, letterSpacing: '-0.02em', fontWeight: 400 }}>{month.title}</h3>
              <p style={{ margin: '20px 0 24px', fontSize: 16.5, lineHeight: 1.6, color: '#A7A6A1' }}>{month.body}</p>
              <div style={{ display: 'grid', gap: 10, fontSize: 15, color: '#A7A6A1', fontFamily: "'Geist Mono',monospace", letterSpacing: '0.04em' }}>
                {month.tags.map((tag) => (
                  <div key={tag}>{tag}</div>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

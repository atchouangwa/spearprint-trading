import { Reveal } from '../hooks/useReveal.jsx';

const OUTCOMES = ['Refine your execution.', 'Strengthen your risk management.', 'Understand your psychological patterns.', 'Build a more repeatable process.'];

export default function FinalCta() {
  return (
    <section style={{ padding: 'clamp(96px,12vw,160px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(90% 120% at 50% 100%,rgba(198,161,91,0.07) 0%,transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
        <Reveal as="img" src="/assets/spearprint-seal.png" alt="SpearPrint Society" style={{ width: 104, height: 104, display: 'block', marginBottom: 40, mixBlendMode: 'screen' }} />
        <Reveal style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#C6A15B', marginBottom: 40 }}>
          THREE MONTHS. ONE PROCESS. YOUR TRADING.
        </Reveal>
        <Reveal as="h2" style={{ margin: 0, fontSize: 'clamp(34px,4.6vw,64px)', lineHeight: 1.04, letterSpacing: '-0.028em', fontWeight: 400, maxWidth: '24ch' }}>
          Stop trying to diagnose your trading alone.
        </Reveal>
        <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px, 100%), 1fr))', gap: 48, marginTop: 56, maxWidth: 900 }}>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.65, color: '#A7A6A1' }}>
            Get direct feedback on the decisions that are actually shaping your performance.
          </p>
          <div style={{ display: 'grid', gap: 12, fontSize: 17, color: '#F2F1ED' }}>
            {OUTCOMES.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </Reveal>
        <Reveal style={{ display: 'flex', alignItems: 'center', gap: 32, marginTop: 64, flexWrap: 'wrap' }}>
          <a
            href="#checkout"
            className="sp-cta"
            style={{ background: '#C6A15B', color: '#0B0C0C', fontSize: 13.5, fontWeight: 500, letterSpacing: '0.04em', padding: '18px 32px' }}
          >
            JOIN SPEARPRINT TRADING ELITE
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.18em', color: '#A7A6A1' }}>
            <span>3 MONTHS</span>
            <span style={{ color: '#3E3F3E' }}>/</span>
            <span>PRIVATE 1-ON-1</span>
            <span style={{ color: '#3E3F3E' }}>/</span>
            <span>$2,000</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

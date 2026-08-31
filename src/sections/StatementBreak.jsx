import { Reveal } from '../hooks/useReveal.jsx';

export default function StatementBreak() {
  return (
    <section style={{ padding: 'clamp(96px,12vw,160px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <Reveal
          as="p"
          style={{ margin: 0, fontSize: 'clamp(34px,5.6vw,72px)', lineHeight: 1.04, letterSpacing: '-0.03em', fontWeight: 400, color: '#F2F1ED' }}
        >
          Another 40 hours of trading videos can&rsquo;t review your last trade.
        </Reveal>
        <Reveal
          as="p"
          style={{ margin: '48px 0 0', fontSize: 'clamp(24px,2.6vw,34px)', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#C6A15B' }}
        >
          Elite can.
        </Reveal>
      </div>
    </section>
  );
}

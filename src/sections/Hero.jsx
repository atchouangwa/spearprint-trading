import { Reveal } from '../hooks/useReveal.jsx';

export default function Hero() {
  return (
    <section id="top" style={{ padding: '112px clamp(20px,5vw,32px) 128px', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(120% 90% at 50% 0%,#000 0%,transparent 72%)',
          WebkitMaskImage: 'radial-gradient(120% 90% at 50% 0%,#000 0%,transparent 72%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px, 100%), 1fr))',
          gap: 72,
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div>
          <Reveal style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
            <span style={{ width: 28, height: 1, background: '#C6A15B' }} />
            <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.22em', color: '#C6A15B' }}>
              SPEARPRINT TRADING ELITE
            </span>
          </Reveal>

          <Reveal
            as="h1"
            style={{ margin: 0, fontSize: 'clamp(40px,5.1vw,76px)', lineHeight: 1.02, letterSpacing: '-0.028em', fontWeight: 400 }}
          >
            You Don&rsquo;t Need Another Trading Strategy.
            <br />
            <span style={{ color: '#F2F1ED' }}>You Need Better Execution.</span>
          </Reveal>

          <Reveal as="p" style={{ margin: '32px 0 0', maxWidth: 600, fontSize: 19, lineHeight: 1.6, color: '#A7A6A1' }}>
            Three months of private 1-on-1 mentorship focused on your trades, your risk management, your psychology, and your
            execution.
          </Reveal>

          <Reveal as="p" style={{ margin: '16px 0 0', maxWidth: 600, fontSize: 19, lineHeight: 1.6, color: '#A7A6A1' }}>
            Work directly with an experienced trader to identify what&rsquo;s holding you back and build a more repeatable
            trading process.
          </Reveal>

          <Reveal
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              margin: '48px 0 0',
              fontFamily: "'Geist Mono',monospace",
              fontSize: 11.5,
              letterSpacing: '0.18em',
              color: '#F2F1ED',
              flexWrap: 'wrap',
            }}
          >
            <span>PRIVATE 1-ON-1</span>
            <span style={{ color: '#3E3F3E' }}>/</span>
            <span>3 MONTHS</span>
            <span style={{ color: '#3E3F3E' }}>/</span>
            <span style={{ color: '#C6A15B' }}>$2,000</span>
          </Reveal>

          <Reveal style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
            <a
              href="#offer"
              className="sp-cta"
              style={{
                background: '#C6A15B',
                color: '#0B0C0C',
                fontSize: 13.5,
                fontWeight: 500,
                letterSpacing: '0.04em',
                padding: '17px 30px',
              }}
            >
              JOIN SPEARPRINT TRADING ELITE
            </a>
            <span style={{ fontSize: 13.5, color: '#6E6E6A', maxWidth: '26ch', lineHeight: 1.5 }}>
              Private mentorship for serious traders. One trader at a time.
            </span>
          </Reveal>
        </div>

        <Reveal style={{ border: '1px solid rgba(255,255,255,0.1)', background: '#111212' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              fontFamily: "'Geist Mono',monospace",
              fontSize: 10,
              letterSpacing: '0.16em',
              color: '#6E6E6A',
            }}
          >
            <span>REVIEW SESSION / ILLUSTRATIVE</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#C6A15B' }} />
              SESSION 04
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px' }}>
            <div
              style={{
                padding: '24px 20px',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
                minHeight: 280,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px)',
                backgroundSize: '100% 40px',
              }}
            >
              <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: '0.14em', color: '#6E6E6A', marginBottom: 8 }}>
                EXECUTION vs PLAN
              </div>
              <svg viewBox="0 0 420 200" preserveAspectRatio="none" style={{ width: '100%', height: 216, display: 'block', overflow: 'visible' }}>
                <line x1="0" y1="62" x2="420" y2="62" stroke="rgba(198,161,91,0.4)" strokeWidth="1" strokeDasharray="3 5" />
                <line x1="0" y1="150" x2="420" y2="150" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="3 5" />
                <polyline
                  points="0,140 42,128 84,146 126,110 168,120 210,78 252,96 294,58 336,84 378,44 420,66"
                  fill="none"
                  stroke="#F2F1ED"
                  strokeWidth="1.25"
                  strokeDasharray="620"
                  style={{ animation: 'spTrace 1400ms cubic-bezier(0.23,1,0.32,1) both' }}
                />
                <circle cx="126" cy="110" r="3.5" fill="#090A0A" stroke="#C6A15B" strokeWidth="1.25" />
                <circle cx="294" cy="58" r="3.5" fill="#090A0A" stroke="#C6A15B" strokeWidth="1.25" />
              </svg>
              <div
                style={{
                  display: 'flex',
                  gap: 20,
                  marginTop: 12,
                  fontFamily: "'Geist Mono',monospace",
                  fontSize: 9.5,
                  letterSpacing: '0.12em',
                  color: '#6E6E6A',
                }}
              >
                <span style={{ color: '#C6A15B' }}>&mdash; &mdash; PLANNED RISK LIMIT</span>
                <span>&mdash; &mdash; STOP LEVEL</span>
              </div>
            </div>

            <div>
              {[
                ['PLAN', 'Wait for setup / 1R', false],
                ['EXECUTION', 'Entered ahead of trigger', false],
                ['RISK', 'Size above defined limit', true],
                ['PSYCHOLOGY', 'Hesitation after loss', false],
                ['REVIEW', 'Priority: risk discipline', false],
              ].map(([label, value, highlight], i, arr) => (
                <div
                  key={label}
                  style={{
                    padding: '14px 16px',
                    borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    background: highlight ? '#151616' : 'transparent',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Geist Mono',monospace",
                      fontSize: 9.5,
                      letterSpacing: '0.16em',
                      color: highlight ? '#C6A15B' : '#6E6E6A',
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: 13, color: '#F2F1ED', marginTop: 5 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '16px 18px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: '#A7A6A1', lineHeight: 1.55 }}>
            Session note &mdash; the entry matched your setup criteria. The size did not. Next two weeks: fixed risk per trade,
            written down before entry, reviewed together.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

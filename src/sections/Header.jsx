export default function Header({ wideNav }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'rgba(9,10,10,0.82)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(20px,5vw,32px)',
          height: 88,
          display: 'flex',
          alignItems: 'center',
          gap: 48,
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '0 0 auto' }}>
          <img
            src="/assets/spearprint-seal.png"
            alt="SpearPrint Society"
            style={{ width: 64, height: 64, display: 'block', mixBlendMode: 'screen' }}
          />
        </a>

        {wideNav && (
          <nav style={{ display: 'flex', gap: 32, marginLeft: 'auto', fontSize: 13.5, color: '#A7A6A1' }}>
            <a href="#mentorship" className="sp-link">Mentorship</a>
            <a href="#included" className="sp-link">What&rsquo;s Included</a>
            <a href="#how" className="sp-link">How It Works</a>
            <a href="#faq" className="sp-link">FAQ</a>
          </nav>
        )}

        <a
          href="#offer"
          className="sp-join-nav"
          style={{
            flex: '0 0 auto',
            marginLeft: 'auto',
            fontFamily: "'Geist Mono',monospace",
            fontSize: 11,
            letterSpacing: '0.16em',
            color: '#C6A15B',
            border: '1px solid rgba(198,161,91,0.45)',
            padding: '11px 18px',
          }}
        >
          JOIN ELITE
        </a>
      </div>
    </header>
  );
}

export default function StickyMobileCta({ show }) {
  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 80,
        background: 'rgba(9,10,10,0.94)',
        backdropFilter: 'blur(14px)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 9.5, letterSpacing: '0.18em', color: '#6E6E6A' }}>
          PRIVATE 1-ON-1 / 3 MONTHS
        </div>
        <div style={{ fontSize: 14, marginTop: 3 }}>SpearPrint Trading Elite</div>
      </div>
      <a
        href="#checkout"
        className="sp-sticky-cta"
        style={{
          flex: '0 0 auto',
          background: '#C6A15B',
          color: '#0B0C0C',
          fontSize: 12.5,
          fontWeight: 500,
          letterSpacing: '0.04em',
          padding: '14px 18px',
          transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1)',
        }}
      >
        JOIN ELITE &mdash; $2,000
      </a>
    </div>
  );
}

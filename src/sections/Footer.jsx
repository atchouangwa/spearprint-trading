export default function Footer() {
  return (
    <footer style={{ padding: '64px clamp(20px,5vw,32px) 96px', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#0C0D0D' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 56 }}>
        <div style={{ flex: '1 1 240px', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <img src="/assets/spearprint-seal.png" alt="SpearPrint Society" style={{ width: 56, height: 56, display: 'block', mixBlendMode: 'screen' }} />
            <span style={{ fontSize: 15, fontWeight: 500 }}>SpearPrint</span>
          </div>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: '#4E4F4E', maxWidth: '32ch' }}>
            Private trading mentorship. Focus. Patience. Dominion.
          </p>
        </div>

        <div style={{ flex: '3 1 480px', minWidth: 0 }}>
          <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: '0.2em', color: '#6E6E6A', marginBottom: 16 }}>
            RISK DISCLOSURE
          </div>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.7, color: '#6E6E6A', maxWidth: '88ch' }}>
            Trading involves substantial risk of loss and is not suitable for every investor. SpearPrint Trading Elite is an
            educational mentorship focused on process, execution and risk management. Nothing on this page is financial
            advice, a signal service, or a solicitation to buy or sell any instrument. No profitability, income, return or
            win-rate outcome is promised or implied. Past performance does not indicate future results. Any trade, chart or
            session note shown is illustrative only and does not represent a client account.
          </p>
          <div style={{ display: 'flex', gap: 28, marginTop: 28, fontSize: 13, color: '#6E6E6A', flexWrap: 'wrap' }}>
            <a href="#top" style={{ color: '#6E6E6A' }}>Terms</a>
            <a href="#top" style={{ color: '#6E6E6A' }}>Privacy</a>
            <a href="#top" style={{ color: '#6E6E6A' }}>Contact</a>
            <span style={{ marginLeft: 'auto' }}>&copy; 2026 SpearPrint</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Reveal } from '../hooks/useReveal.jsx';

const FAQ_DATA = [
  ['Who is this mentorship for?', 'This program is designed for committed traders who want personalized guidance, accountability, and a clear roadmap to improve consistency and performance.'],
  ['What do I get?', "You'll receive private coaching sessions, personalized trade reviews, psychology coaching, risk management guidance, execution feedback, and direct support throughout the mentorship."],
  ['Do I need trading experience?', "No. Whether you're new to trading or already experienced, the mentorship is customized to your current skill level and long-term goals."],
  ['Will I receive trading signals?', 'No. The focus is on teaching you how to think, manage risk, and execute independently so you can develop lasting trading skills rather than relying on signals.'],
  ['How long does the mentorship last?', 'Your mentorship includes a structured coaching experience with personalized guidance, action plans, and ongoing accountability designed to accelerate your trading progress.'],
  ['How much does Elite cost?', '$2,000 for the full three-month private mentorship.'],
  ['Is this a trading course?', 'No. There is no fixed curriculum to work through. Every session is built around your trades, your risk process and your current weaknesses.'],
  ['Will this guarantee that I become profitable?', 'No. No mentorship can guarantee results. Elite is focused on improving your process, execution and risk discipline. Trading carries substantial risk of loss.'],
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ padding: 'clamp(80px,10vw,128px) clamp(20px,5vw,32px)', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#0C0D0D' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-0.022em', fontWeight: 400 }}>Questions</h2>
          <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: '#6E6E6A' }}>11 / FAQ</span>
        </Reveal>

        <Reveal style={{ border: '1px solid rgba(255,255,255,0.1)', background: '#111212', borderRadius: 4, overflow: 'hidden' }}>
          {FAQ_DATA.map(([q, a], i) => {
            const isOpen = i === open;
            return (
              <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  role="button"
                  tabIndex={0}
                  className="sp-row-item"
                  style={{
                    padding: '28px 32px',
                    display: 'flex',
                    gap: 32,
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'background-color 160ms ease',
                  }}
                >
                  <span
                    style={{
                      flex: 1,
                      fontSize: 'clamp(18px,1.6vw,22px)',
                      lineHeight: 1.35,
                      letterSpacing: '-0.012em',
                      color: isOpen ? '#F2F1ED' : '#D8D7D2',
                      transition: 'color 160ms ease',
                    }}
                  >
                    {q}
                  </span>
                  <span style={{ flex: '0 0 auto', position: 'relative', width: 14, height: 14 }}>
                    <span
                      style={{
                        position: 'absolute',
                        top: 6.5,
                        left: 0,
                        width: 14,
                        height: 1,
                        background: isOpen ? '#C6A15B' : '#A7A6A1',
                        transition: 'background-color 160ms ease',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 6.5,
                        width: 1,
                        height: 14,
                        background: isOpen ? '#C6A15B' : '#A7A6A1',
                        transition: 'transform 240ms cubic-bezier(0.23,1,0.32,1),opacity 200ms ease',
                        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                        opacity: isOpen ? 0 : 1,
                      }}
                    />
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 260ms cubic-bezier(0.23,1,0.32,1)' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <p
                      style={{
                        margin: 0,
                        padding: '0 108px 30px 32px',
                        fontSize: 17,
                        lineHeight: 1.65,
                        color: '#A7A6A1',
                        transition: 'opacity 200ms ease',
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

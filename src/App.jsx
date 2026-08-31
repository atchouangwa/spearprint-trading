import { RevealProvider } from './hooks/useReveal.jsx';
import { useScrollState } from './hooks/useScrollState.js';

import Header from './sections/Header.jsx';
import Hero from './sections/Hero.jsx';
import ProblemRecognition from './sections/ProblemRecognition.jsx';
import ExecutionGap from './sections/ExecutionGap.jsx';
import StatementBreak from './sections/StatementBreak.jsx';
import Included from './sections/Included.jsx';
import WhyOneOnOne from './sections/WhyOneOnOne.jsx';
import TradeReview from './sections/TradeReview.jsx';
import EliteLoop from './sections/EliteLoop.jsx';
import Roadmap from './sections/Roadmap.jsx';
import Shift from './sections/Shift.jsx';
import Fit from './sections/Fit.jsx';
import Offer from './sections/Offer.jsx';
import Checkout from './sections/Checkout.jsx';
import Faq from './sections/Faq.jsx';
import FinalCta from './sections/FinalCta.jsx';
import Footer from './sections/Footer.jsx';
import StickyMobileCta from './sections/StickyMobileCta.jsx';

export default function App() {
  const { wideNav, showSticky } = useScrollState({ stickyMobileCta: true });

  return (
    <RevealProvider>
      <div style={{ background: '#090A0A', minHeight: '100vh', overflowX: 'hidden' }}>
        <Header wideNav={wideNav} />
        <Hero />
        <ProblemRecognition />
        <ExecutionGap />
        <StatementBreak />
        <Included />
        <WhyOneOnOne />
        <TradeReview />
        <EliteLoop />
        <Roadmap />
        <Shift />
        <Fit />
        <Offer />
        <Checkout />
        <Faq />
        <FinalCta />
        <Footer />
        <StickyMobileCta show={showSticky} />
      </div>
    </RevealProvider>
  );
}

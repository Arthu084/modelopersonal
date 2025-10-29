import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import EmpathySection from '@/components/landing/EmpathySection';
import MethodSection from '@/components/landing/MethodSection';
import ResultsSection from '@/components/landing/ResultsSection';
import OfferSection from '@/components/landing/OfferSection';
import FaqSection from '@/components/landing/FaqSection';
import ClosingSection from '@/components/landing/ClosingSection';
import WhatsAppButton from '@/components/landing/WhatsAppButton';
import FloatingBadge from '@/components/landing/FloatingBadge';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <EmpathySection />
        <MethodSection />
        <ResultsSection />
        <OfferSection />
        <FaqSection />
        <ClosingSection />
      </main>
      <WhatsAppButton />
      <FloatingBadge />
      <Footer />
    </div>
  );
}

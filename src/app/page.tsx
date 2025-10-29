import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import EmpathySection from '@/components/landing/EmpathySection';
import OfferSection from '@/components/landing/OfferSection';
import FaqSection from '@/components/landing/FaqSection';
import WhatsAppButton from '@/components/landing/WhatsAppButton';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <EmpathySection />
        <OfferSection />
        <FaqSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

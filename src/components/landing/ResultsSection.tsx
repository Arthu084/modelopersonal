import { Button } from "@/components/ui/button";
import { TestimonialCarousel } from "@/components/landing/TestimonialCarousel";

const ResultsSection = () => {
  return (
    <section id="results" className="w-full bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-12">
        <div className="space-y-4 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Resultados reais de mulheres que confiaram no Método S.L.I.M
          </h2>
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

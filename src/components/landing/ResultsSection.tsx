import { Button } from "@/components/ui/button";
import { TestimonialCarousel } from "@/components/landing/TestimonialCarousel";

const ResultsSection = () => {
  return (
    <section id="results" className="w-full bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-12">
        <div className="space-y-4 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Resultados reais de mulheres que confiaram no <span className="text-primary">Método S.L.I.M</span>
          </h2>
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <TestimonialCarousel />
        </div>
        
        <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
          <Button asChild size="lg" className="rounded-lg text-lg px-8 py-6 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300 w-full max-w-xs mx-auto">
            <a href="https://wa.me/?text=Quero%20garantir%20minha%20vaga%20no%20S.L.I.M!" target="_blank" rel="noopener noreferrer">
              Garantir minha vaga no S.L.I.M
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

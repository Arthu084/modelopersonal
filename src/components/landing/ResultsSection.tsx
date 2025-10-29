import { TestimonialCarousel } from "@/components/landing/TestimonialCarousel";

const ResultsSection = () => {
  return (
    <section id="results" className="w-full bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-12">
        <div className="space-y-4 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Resultados Reais de Mulheres Reais
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Elas alcançaram a melhor versão.
          </p>
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

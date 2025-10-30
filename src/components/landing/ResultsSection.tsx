import { TestimonialCarousel } from "@/components/landing/TestimonialCarousel";

const ResultsSection = () => {
  return (
    <section id="results" className="w-full bg-card pt-8 pb-2">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground">
            Resultados Reais <br /> de Mulheres Reais
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Elas alcançaram a melhor versão.
          </p>
        </div>

        <div className="animate-on-scroll pt-0" style={{ animationDelay: '0.1s' }}>
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

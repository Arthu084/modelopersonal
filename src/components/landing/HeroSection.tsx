import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full bg-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 animate-on-scroll">
          <h1 className="text-2xl md:text-3xl font-headline font-bold text-foreground leading-tight max-w-3xl">
            Ajudando mulheres sem tempo a conquistarem um corpo elegante e definido com o Método S.L.I.M.
          </h1>
          <div className="inline-block text-left">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              ✅ Resultados reais. Treinos rápidos.
              <br />
              🔗 Comece sua consultoria agora
            </p>
          </div>
          <Button asChild size="lg" className="rounded-lg text-lg px-8 py-6 shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 w-full max-w-md mx-auto">
            <a href="https://wa.me/?text=Quero%20fazer%20parte%20do%20S.L.I.M%20agora!" target="_blank" rel="noopener noreferrer">
              QUERO ENTRAR PARA O TIME
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

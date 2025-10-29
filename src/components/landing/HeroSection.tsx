import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full bg-background pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 animate-on-scroll">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground leading-tight">
            Recupere a confiança no seu corpo com o <span className="text-primary">Método S.L.I.M</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Treinos de 35 a 50 minutos por dia, criados para mulheres com rotinas corridas que querem secar a barriga e definir o corpo.
          </p>
          <div style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="rounded-lg text-lg px-8 py-6 shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 w-full max-w-xs mx-auto">
              <a href="https://wa.me/?text=Quero%20fazer%20parte%20do%20S.L.I.M%20agora!" target="_blank" rel="noopener noreferrer">
                Quero fazer parte do S.L.I.M agora!
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full bg-background pt-12 pb-2">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 animate-on-scroll">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground leading-tight max-w-3xl">
            Ajudando mulheres sem tempo a conquistarem um corpo definido e elegante com o Método Dutra.
          </h1>
          <div className="inline-block text-left">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              ✅ Resultados reais. Treinos rápidos.
              <br />
              🔗 Comece sua consultoria agora
            </p>
          </div>

          <div className="w-full max-w-xs mx-auto">
            <div className="aspect-[9/16] bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/50 relative overflow-hidden shadow-lg">
              <div className="text-center text-primary/80">
                <PlayCircle className="w-16 h-16 mx-auto" />
                <p className="mt-2 font-semibold">Assista ao vídeo</p>
              </div>
            </div>
          </div>
          
          <Button asChild size="lg" className="rounded-lg text-lg px-8 py-6 shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 w-full max-w-md mx-auto">
            <a href="https://wa.me/?text=Quero%20fazer%20parte%20do%20Método%20Dutra%20agora!" target="_blank" rel="noopener noreferrer">
              QUERO ENTRAR PARA O TIME
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

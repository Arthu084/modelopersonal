import { Button } from "@/components/ui/button";
import { CirclePlay, PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full bg-background pt-8 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 animate-on-scroll">
          <h1 className="text-2xl font-headline font-bold text-foreground leading-tight max-w-3xl">
            O método que já ajudou centenas de mulheres a alcançarem o corpo desjado - mesmo com a rotina apertada!
          </h1>
          <p className="mt-2 font-semibold flex items-center gap-2 text-primary text-2xl">
            <CirclePlay className="w-5 h-5" />
            Assista ao vídeo e entenda:
          </p>
          <div className="w-full max-w-xs mx-auto">
            <div className="aspect-[9/16] bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/50 relative overflow-hidden shadow-lg">
              <div className="text-center text-primary/80 flex flex-col items-center justify-center">
                <PlayCircle className="w-16 h-16" />
              </div>
            </div>
          </div>
          <div className="inline-block text-left">
            <p className="text-lg md:text-xl text-muted-foreground font-bold">
              ✅ Resultados reais. Treinos rápidos.
              <br />
              🔗 Comece sua consultoria agora
            </p>
          </div>
          
          <Button asChild size="lg" className="w-full max-w-md mx-auto rounded-lg text-xl font-bold px-10 py-8 shadow-lg btn-shine transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/?text=Quero%20fazer%20parte%20do%20Método%20Dutra%20agora!" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
              QUERO ENTRAR PARA O TIME
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

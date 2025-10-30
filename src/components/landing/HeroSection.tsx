import { Button } from "@/components/ui/button";
import { CheckCircle2, Link } from "lucide-react";

const PointingFinger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-primary"
  >
    <path d="M22 12H2" />
    <path d="M16 6l6 6-6 6" />
  </svg>
);


const HeroSection = () => {
  return (
    <section className="w-full bg-background pt-8 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 animate-on-scroll">
          <h1 className="text-2xl font-headline font-bold text-foreground leading-tight max-w-3xl">
            O método que já ajudou centenas de mulheres a alcançarem o corpo desjado - mesmo com a rotina apertada!
          </h1>
          <p className="mt-2 flex items-center gap-2 text-muted-foreground text-lg font-bold">
            <PointingFinger />
            Assista ao vídeo e entenda:
          </p>
          <div className="w-full max-w-xs mx-auto">
            <div className="aspect-[9/16] bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/50 relative overflow-hidden shadow-lg">
              <div className="text-center text-primary/80 flex flex-col items-center justify-center">
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 h-16"
                >
                  <path d="M7 6v12l10-6z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="inline-block text-left space-y-2">
            <div className="flex items-center gap-2 text-lg text-muted-foreground font-bold">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <span>Resultados reais. Treinos rápidos.</span>
            </div>
            <div className="flex items-center gap-2 text-lg text-muted-foreground font-bold">
              <Link className="w-6 h-6 text-primary" />
              <span>Comece sua consultoria agora</span>
            </div>
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

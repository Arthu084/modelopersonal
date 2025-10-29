import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const MuscleIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    {...props}
  >
    <path d="M8.3,6.3C5.9,8.2,5.2,9.4,4.7,11.5c-0.2,0.9,0.1,1.9,0.6,2.7c0.5,0.8,1.2,1.4,2.1,1.8 c1.8,0.8,3.8,0.7,5.6-0.1c1.2-0.5,2.3-1.3,3.3-2.2c1.1-1,2-2.2,2.7-3.4c0.7-1.3,1-2.6,1.1-4c0-0.9-0.2-1.8-0.6-2.6 c-0.4-0.8-1-1.5-1.7-2c-1.4-1-3.2-1.5-5-1.3C10.7,0.1,9.3,0.7,8.1,1.7C7.6,2.2,7.1,2.8,6.8,3.4" />
    <path d="M6.8,3.4C6.2,4.6,5.8,5.8,5.5,7.1c-0.2,0.9-0.2,1.9-0.1,2.8c0.1,0.9,0.4,1.8,0.8,2.7c0.2,0.5,0.5,0.9,0.8,1.3" />
    <path d="M8.4,18.4c-1.3-0.2-2.5-0.8-3.5-1.7c-1-0.9-1.7-2-2.1-3.3c-0.3-1.2-0.2-2.4,0.1-3.6" />
  </svg>
);


const HeroSection = () => {
  return (
    <section className="w-full bg-background pt-8 pb-10">
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
          
          <Button asChild size="lg" className="w-full max-w-md mx-auto rounded-lg text-xl font-bold px-10 py-8 shadow-lg btn-shine transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/?text=Quero%20fazer%20parte%20do%20Método%20Dutra%20agora!" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
              QUERO ENTRAR PARA O TIME
              <MuscleIcon className="w-6 h-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

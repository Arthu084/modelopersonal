import { Button } from "@/components/ui/button";
import { CheckCircle2, Link } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";


const HeroSection = () => {
    const victorImage = PlaceHolderImages.find(p => p.id === 'empathy-image');
  return (
    <section className="w-full bg-background pt-8 pb-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 animate-on-scroll">
          
          <div className="animate-on-scroll" style={{ animationDelay: '0.15s' }}>
            <div className="bg-card text-card-foreground p-8 md:p-10 rounded-2xl shadow-lg border border-border/50">
                {victorImage && (
                  <div className="flex-shrink-0 flex justify-center mb-4">
                    <div className="text-center">
                      <Image
                        src={victorImage.imageUrl}
                        alt={victorImage.description}
                        width={100}
                        height={100}
                        className="rounded-full object-cover border-[6px] border-primary shadow-lg mx-auto"
                        data-ai-hint={victorImage.imageHint}
                      />
                      <p className="font-bold text-lg text-foreground mt-2">Ricardo Dutra</p>
                      <p className="text-sm text-muted-foreground">CREF: 000000-G/SP</p>
                      <p className="text-sm text-muted-foreground">Criador do Método Dutra</p>
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  <blockquote className="text-lg md:text-xl font-light leading-relaxed text-foreground">
                    “Eu sei como é olhar no espelho e <span className="font-bold text-black">não se reconhecer mais</span>. Com o método certo, é totalmente possível transformar seu corpo e sua autoestima com o tempo que você tem.”
                  </blockquote>
                </div>
            </div>
          </div>

          <div className="inline-block text-left space-y-2">
            <div className="flex items-center gap-2 text-base text-muted-foreground font-bold">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Resultados reais. Treinos rápidos.</span>
            </div>
            <div className="flex items-center gap-2 text-base text-muted-foreground font-bold">
              <Link className="w-5 h-5 text-primary" />
              <span>Comece sua Transformação Agora</span>
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

import { Button } from "@/components/ui/button";
import { Dumbbell, UtensilsCrossed, MessageSquare, Target } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const OfferSection = () => {
  const features = [
    { text: "Treino personalizado, ajustado à sua rotina e objetivos.", icon: Dumbbell },
    { text: "Plano alimentar estratégico e flexível, sem restrições absurdas.", icon: UtensilsCrossed },
    { text: "Acompanhamento direto e pessoal via WhatsApp para tirar dúvidas.", icon: MessageSquare },
    { text: "Monitoramento semanal dos resultados para garantir sua evolução contínua.", icon: Target },
  ];
  
  const victorImage = PlaceHolderImages.find(p => p.id === 'empathy-image');

  return (
    <section id="offer" className="w-full bg-card pt-4 pb-12">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl mx-auto space-y-4">

        <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <div className="bg-background text-card-foreground p-8 md:p-10 rounded-2xl shadow-2xl border border-border/50">
            <h3 className="text-2xl md:text-3xl font-headline mb-8 font-bold text-foreground">Ao entrar para o time Dutra, você garante:</h3>
            <ul className="space-y-6 text-left max-w-lg mx-auto">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-lg md:text-xl font-light text-foreground">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '0.15s' }}>
          <div className="bg-background text-card-foreground p-8 md:p-10 rounded-2xl shadow-2xl border border-border/50">
              {victorImage && (
                <div className="flex-shrink-0 flex justify-center mb-4">
                  <Image
                    src={victorImage.imageUrl}
                    alt={victorImage.description}
                    width={100}
                    height={100}
                    className="rounded-full object-cover border-4 border-primary shadow-lg"
                    data-ai-hint={victorImage.imageHint}
                  />
                </div>
              )}
              <div className="space-y-2">
                <blockquote className="text-lg md:text-xl font-light leading-relaxed text-foreground">
                  “Eu sei como é olhar no espelho e <span className="font-bold text-foreground">não se reconhecer mais</span>. Com o método certo, é totalmente possível transformar seu corpo e sua autoestima com o tempo que você tem.”
                </blockquote>
                <div>
                  <p className="font-bold text-lg text-foreground">Ricardo Dutra</p>
                  <p className="text-sm text-muted-foreground">Criador do Método Dutra</p>
                </div>
              </div>
          </div>
        </div>
        
        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <Button asChild size="lg" className="w-full max-w-md mx-auto rounded-lg text-xl font-bold px-10 py-8 shadow-lg btn-shine transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/?text=Quero%20fazer%20parte%20do%20Método%20Dutra%20agora!" target="_blank" rel="noopener noreferrer">
              QUERO ENTRAR PARA O TIME
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;

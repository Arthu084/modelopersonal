import { Button } from "@/components/ui/button";
import { Dumbbell, UtensilsCrossed, MessageSquare, Target } from "lucide-react";

const OfferSection = () => {
  const features = [
    { text: "Treino personalizado, ajustado à sua rotina e objetivos.", icon: Dumbbell },
    { text: "Plano alimentar estratégico e flexível, sem restrições absurdas.", icon: UtensilsCrossed },
    { text: "Acompanhamento direto e pessoal via WhatsApp para tirar dúvidas.", icon: MessageSquare },
    { text: "Monitoramento semanal dos resultados para garantir sua evolução contínua.", icon: Target },
  ];

  return (
    <section id="offer" className="w-full bg-secondary pb-16 lg:pb-20">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl mx-auto space-y-12">

        <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <div className="bg-card text-card-foreground p-8 md:p-10 rounded-2xl shadow-2xl border border-border/50">
            <h3 className="text-3xl font-headline mb-8 font-bold text-primary">Ao entrar para o time S.L.I.M, você garante:</h3>
            <ul className="space-y-6 text-left max-w-lg mx-auto">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-lg md:text-xl text-foreground">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <Button asChild size="lg" className="w-full max-w-md mx-auto rounded-lg text-xl px-10 py-8 shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/?text=Quero%20fazer%20parte%20do%20S.L.I.M%20agora!" target="_blank" rel="noopener noreferrer">
              QUERO ENTRAR PARA O TIME
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;

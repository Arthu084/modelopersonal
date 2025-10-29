import { Button } from "@/components/ui/button";
import { Dumbbell, UtensilsCrossed, MessageSquare, Target } from "lucide-react";

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

const OfferSection = () => {
  const features = [
    { text: "Treino personalizado, ajustado à sua rotina e objetivos.", icon: Dumbbell },
    { text: "Plano alimentar estratégico e flexível, sem restrições absurdas.", icon: UtensilsCrossed },
    { text: "Acompanhamento direto e pessoal via WhatsApp para tirar dúvidas.", icon: MessageSquare },
    { text: "Monitoramento semanal dos resultados para garantir sua evolução contínua.", icon: Target },
  ];

  return (
    <section id="offer" className="w-full bg-card py-0">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl mx-auto space-y-12">

        <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <div className="bg-background text-card-foreground p-8 md:p-10 rounded-2xl shadow-2xl border border-border/50">
            <h3 className="text-3xl font-headline mb-8 font-bold text-primary">Ao entrar para o time Dutra, você garante:</h3>
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

export default OfferSection;

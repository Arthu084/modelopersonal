import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const OfferSection = () => {
  const features = [
    "Treino personalizado e ajustado à sua rotina",
    "Plano alimentar estratégico",
    "Acompanhamento via WhatsApp",
    "Monitoramento semanal dos resultados",
  ];

  return (
    <section id="offer" className="w-full bg-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl mx-auto space-y-12">

        <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-2xl shadow-2xl shadow-primary/30 border border-primary/50">
            <h3 className="text-3xl font-headline mb-8">Você recebe:</h3>
            <ul className="space-y-5 text-left max-w-md mx-auto">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-primary-foreground flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl text-primary-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <Button asChild size="lg" className="w-full max-w-md mx-auto rounded-lg text-xl px-10 py-8 shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 bg-white text-primary hover:bg-gray-100">
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

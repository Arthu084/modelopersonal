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
    <section className="w-full bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl mx-auto space-y-6">
        <div className="space-y-4 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-headline font-bold">
            Vagas Abertas para o Acompanhamento Individual do Método S.L.I.M
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Estou abrindo novas vagas para minha consultoria personalizada (online e presencial em Natal/RN). Cada aluna recebe acompanhamento direto comigo — por isso, as vagas são limitadas.
          </p>
        </div>

        <div className="bg-card p-8 rounded-2xl shadow-2xl shadow-primary/10 border border-border animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-2xl font-headline mb-6 text-foreground">Você recebe:</h3>
          <ul className="space-y-4 text-left max-w-md mx-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
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

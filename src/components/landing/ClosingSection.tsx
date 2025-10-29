import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  return (
    <section className="w-full bg-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl mx-auto space-y-8">
        <div className="space-y-6 animate-on-scroll">
          <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed">
            Toda mulher merece se olhar no espelho e se sentir <span className="text-primary font-bold">bem de novo.</span>
          </p>
          <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed">
            Não espere a próxima segunda, o próximo mês ou o “tempo certo”.
          </p>
          <p className="text-4xl md:text-5xl font-headline font-bold text-foreground">
            O tempo é <span className="text-primary">agora.</span>
          </p>
          <p className="text-lg text-muted-foreground">
            Deixe o Método S.L.I.M te mostrar que mudar o corpo pode ser simples, rápido e possível.
          </p>
        </div>
        
        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <Button asChild size="lg" className="rounded-lg text-xl px-10 py-8 shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/?text=Estou%20pronta%20para%20come%C3%A7ar%20agora!" target="_blank" rel="noopener noreferrer">
              ✅ Sim, quero transformar meu corpo!
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;

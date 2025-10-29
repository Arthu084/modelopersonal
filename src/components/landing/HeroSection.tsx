import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full bg-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 animate-on-scroll">
          <h1 className="text-2xl md:text-3xl font-headline font-bold text-foreground leading-tight max-w-3xl">
            Ajudando mulheres sem tempo a conquistarem um corpo elegante e definido com o Método S.L.I.M.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            💥 Resultados reais. Treinos rápidos. 🔗 Comece sua consultoria agora 👇
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

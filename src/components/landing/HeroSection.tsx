import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full bg-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 animate-on-scroll">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground leading-tight">
            Consultoria online para mulheres que buscam resultados
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            O Método S.L.I.M é para mulheres com rotinas corridas que querem secar a barriga e definir o corpo, treinando em casa ou na academia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

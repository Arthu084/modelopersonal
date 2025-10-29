import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <section className="w-full bg-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left space-y-6 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground leading-tight">
              💥 Transforme Seu Corpo e Recupere Sua Confiança com o <span className="text-primary">Método S.L.I.M</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              O método criado por Victor Pablo, personal trainer e coach, que já ajudou centenas de mulheres com rotinas corridas a secarem a barriga, definirem o corpo e voltarem a se sentir incríveis em frente ao espelho — com treinos de 35 a 50 minutos por dia.
            </p>
            <div>
              <Button asChild size="lg" className="rounded-lg text-lg px-8 py-6 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300">
                <a href="https://wa.me/?text=Oi%20Victor!%20Quero%20saber%20mais%20sobre%20o%20M%C3%A9todo%20S.L.I.M%20%F0%9F%91%8B" target="_blank" rel="noopener noreferrer">
                  💬 Quero Fazer Parte do S.L.I.M
                </a>
              </Button>
            </div>
          </div>
          <div className="relative animate-on-scroll hidden lg:block" style={{ animationDelay: '0.2s' }}>
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl shadow-primary/20 object-cover w-full h-auto"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

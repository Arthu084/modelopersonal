import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EmpathySection = () => {
  const victorImage = PlaceHolderImages.find(p => p.id === 'empathy-image');
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <div className="animate-on-scroll w-full max-w-lg">
          <Card className="bg-card border-none shadow-2xl text-center">
            <CardContent className="p-8 md:p-12 space-y-6">
              {victorImage && (
                <div className="flex-shrink-0 flex justify-center mb-4">
                  <Image
                    src={victorImage.imageUrl}
                    alt={victorImage.description}
                    width={180}
                    height={180}
                    className="rounded-full object-cover border-4 border-primary shadow-lg"
                    data-ai-hint={victorImage.imageHint}
                  />
                </div>
              )}
              <div className="space-y-4">
                <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-foreground">
                  “Eu sei como é olhar no espelho e <span className="font-bold text-primary">não se reconhecer mais</span>. Com o método certo, é totalmente possível transformar seu corpo e sua autoestima com o tempo que você tem.”
                </blockquote>
                <div>
                  <p className="font-bold text-xl text-card-foreground">Victor Pablo</p>
                  <p className="text-md text-muted-foreground">Criador do Método S.L.I.M</p>
                </div>
              </div>
              <div className="pt-2">
                <Button asChild size="lg" className="rounded-lg text-lg px-8 py-6 shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 w-full max-w-md mx-auto">
                  <a href="https://wa.me/?text=Quero%20fazer%20parte%20do%20S.L.I.M%20agora!" target="_blank" rel="noopener noreferrer">
                    QUERO ENTRAR PARA O TIME
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default EmpathySection;

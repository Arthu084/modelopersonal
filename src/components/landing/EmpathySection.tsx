import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EmpathySection = () => {
  const victorImage = PlaceHolderImages.find(p => p.id === 'empathy-image');
  return (
    <section className="w-full pt-4 md:pt-6 pb-2">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <div className="animate-on-scroll w-full max-w-lg">
          <Card className="bg-card border-none shadow-2xl text-center rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              {victorImage && (
                <div className="flex-shrink-0 flex justify-center mb-4">
                  <Image
                    src={victorImage.imageUrl}
                    alt={victorImage.description}
                    width={100}
                    height={100}
                    className="rounded-full object-cover border-[3px] border-green-500 shadow-lg"
                    data-ai-hint={victorImage.imageHint}
                  />
                </div>
              )}
              <div className="space-y-2">
                <blockquote className="text-lg md:text-xl font-light leading-relaxed text-card-foreground">
                  “Eu sei como é olhar no espelho e <span className="font-bold text-primary">não se reconhecer mais</span>. Com o método certo, é totalmente possível transformar seu corpo e sua autoestima com o tempo que você tem.”
                </blockquote>
                <div>
                  <p className="font-bold text-lg text-card-foreground">Ricardo Dutra</p>
                  <p className="text-sm text-muted-foreground">Criador do Método Dutra</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default EmpathySection;

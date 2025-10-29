"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  imageId: string;
};

const testimonials: Testimonial[] = [
  { quote: "Voltei a usar minhas roupas antigas em 3 semanas!", name: "Ana P.", imageId: "testimonial-1-after" },
  { quote: "Nunca pensei que conseguiria resultados treinando tão pouco tempo. O método é incrível!", name: "Bruna C.", imageId: "testimonial-2-after" },
  { quote: "A orientação do Victor fez toda a diferença. Me sinto mais confiante e motivada!", name: "Lúcia M.", imageId: "testimonial-3-after" },
  { quote: "Perdi a barriga que me incomodava e ganhei uma definição que amo. Super recomendo!", name: "Carla S.", imageId: "testimonial-4-after" },
  { quote: "Finalmente um plano que se encaixa na minha rotina de mãe e profissional. Estou amando!", name: "Sofia R.", imageId: "testimonial-5-after" },
];

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => {
          const image = getImage(testimonial.imageId);
          return (
            <CarouselItem key={index}>
              <div className="p-1 h-full">
                <Card className="bg-card border-border h-full flex flex-col shadow-xl rounded-2xl">
                  <CardContent className="p-8 flex flex-col items-center justify-start text-center space-y-4 flex-1">
                    {image && (
                      <div className="flex-shrink-0 flex justify-center mb-2">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={150}
                          height={150}
                          className="rounded-full object-cover border-4 border-primary shadow-lg"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                    </div>
                    <p className="font-bold text-primary text-lg pt-2">- {testimonial.name}</p>
                    <blockquote className="text-xl font-medium italic leading-snug flex-grow">“{testimonial.quote}”</blockquote>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="text-primary-foreground bg-primary/50 hover:bg-primary" />
      <CarouselNext className="text-primary-foreground bg-primary/50 hover:bg-primary" />
    </Carousel>
  );
}

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
  beforeId: string;
  afterId: string;
};

const testimonials: Testimonial[] = [
  { quote: "Voltei a usar minhas roupas antigas em 3 semanas!", name: "Ana P.", beforeId: "testimonial-1-before", afterId: "testimonial-1-after" },
  { quote: "Treino em casa e já perdi 6kg sem sofrimento.", name: "Carla S.", beforeId: "testimonial-2-before", afterId: "testimonial-2-after" },
  { quote: "Nunca imaginei que fosse possível com tão pouco tempo por dia.", name: "Mariana L.", beforeId: "testimonial-1-before", afterId: "testimonial-1-after" },
];

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => {
          const beforeImg = getImage(testimonial.beforeId);
          const afterImg = getImage(testimonial.afterId);
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="bg-background border-primary/20 overflow-hidden h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4 flex-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <p className="text-lg font-medium italic">“{testimonial.quote}”</p>
                    <p className="font-bold text-primary">- {testimonial.name}</p>
                    <div className="grid grid-cols-2 gap-4 pt-4 w-full">
                      {beforeImg && (
                        <div className="text-center">
                           <Image src={beforeImg.imageUrl} alt="Antes" width={150} height={225} className="rounded-lg mx-auto" data-ai-hint={beforeImg.imageHint}/>
                           <p className="text-sm font-bold mt-2 text-muted-foreground">ANTES</p>
                        </div>
                      )}
                      {afterImg && (
                        <div className="text-center">
                          <Image src={afterImg.imageUrl} alt="Depois" width={150} height={225} className="rounded-lg mx-auto border-2 border-primary" data-ai-hint={afterImg.imageHint}/>
                           <p className="text-sm font-bold mt-2 text-primary">DEPOIS</p>
                        </div>
                      )}
                    </div>
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

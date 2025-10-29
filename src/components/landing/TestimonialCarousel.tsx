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
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-[45%] xl:basis-1/3">
              <div className="p-1 h-full">
                <Card className="bg-background border-border overflow-hidden h-full flex flex-col shadow-lg">
                  <CardContent className="p-4 md:p-6 flex flex-col items-center justify-start text-center space-y-4 flex-1">
                    {beforeImg && afterImg && (
                      <div className="grid grid-cols-2 gap-2 w-full mb-2">
                        <div className="text-center">
                          <p className="text-sm font-semibold mb-1 text-muted-foreground">ANTES</p>
                          <Image src={beforeImg.imageUrl} alt="Antes" width={150} height={250} className="rounded-lg mx-auto object-cover border" data-ai-hint={beforeImg.imageHint} />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-semibold mb-1 text-primary">DEPOIS</p>
                          <Image src={afterImg.imageUrl} alt="Depois" width={150} height={250} className="rounded-lg mx-auto object-cover border-2 border-primary" data-ai-hint={afterImg.imageHint} />
                        </div>
                      </div>
                    )}
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <blockquote className="text-lg font-medium italic leading-snug flex-grow">“{testimonial.quote}”</blockquote>
                    <p className="font-bold text-primary text-lg">- {testimonial.name}</p>
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

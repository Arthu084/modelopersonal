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
  { quote: "Treino em casa e já perdi 6kg sem sofrimento.", name: "Carla S.", imageId: "testimonial-2-after" },
  { quote: "Nunca imaginei que fosse possível com tão pouco tempo por dia.", name: "Mariana L.", imageId: "testimonial-video-1"},
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
          const image = getImage(testimonial.imageId);
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-[45%] xl:basis-1/3">
              <div className="p-1 h-full">
                <Card className="bg-card border-border h-full flex flex-col shadow-xl rounded-2xl">
                  <CardContent className="p-6 flex flex-col items-center justify-start text-center space-y-4 flex-1">
                    {image && (
                      <div className="flex-shrink-0 flex justify-center">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={120}
                          height={120}
                          className="rounded-full object-cover border-4 border-primary shadow-lg"
                          data-ai-hint={image.imageHint}
                        />
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
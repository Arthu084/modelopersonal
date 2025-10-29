"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
};

const testimonials: Testimonial[] = [
  { quote: "Voltei a usar minhas roupas antigas em 3 semanas!", name: "Ana P." },
  { quote: "Nunca pensei que conseguiria resultados treinando tão pouco tempo. O método é incrível!", name: "Bruna C." },
  { quote: "A orientação do Ricardo fez toda a diferença. Me sinto mais confiante e motivada!", name: "Lúcia M." },
  { quote: "Perdi a barriga que me incomodava e ganhei uma definição que amo. Super recomendo!", name: "Carla S." },
  { quote: "Finalmente um plano que se encaixa na minha rotina de mãe e profissional. Estou amando!", name: "Sofia R." },
];

export function TestimonialCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => {
            return (
              <CarouselItem key={index}>
                <div className="p-1 h-full">
                  <Card className="bg-card border-none h-full flex flex-col shadow-2xl rounded-3xl">
                    <CardContent className="p-8 flex flex-col items-center justify-start text-center space-y-4 flex-1">
                      <div className="flex-shrink-0 flex justify-center mb-4">
                        <div
                          className="w-[150px] h-[150px] rounded-full bg-muted border-2 border-primary shadow-lg flex items-center justify-center"
                          data-ai-hint="placeholder circle"
                        >
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-current" />
                        ))}
                      </div>
                      <p className="font-bold text-primary text-lg pt-2">
                        - {testimonial.name}
                      </p>
                      <blockquote className="text-xl font-medium italic leading-snug flex-grow">
                        “{testimonial.quote}”
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="py-4 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                current === index ? "w-4 bg-primary" : "bg-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <p>Arraste para o lado ⮕</p>
      </div>
    </div>
  );
}

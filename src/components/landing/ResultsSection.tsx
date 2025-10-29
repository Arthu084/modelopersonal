import { Button } from "@/components/ui/button";
import { TestimonialCarousel } from "@/components/landing/TestimonialCarousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

const ResultsSection = () => {
  const videoThumb = PlaceHolderImages.find(p => p.id === 'testimonial-video-1');
  return (
    <section id="results" className="w-full bg-secondary py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-16">
        <div className="space-y-4 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">
            ✨ Resultados reais de mulheres que confiaram no <span className="text-primary">Método S.L.I.M</span>
          </h2>
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <TestimonialCarousel />
        </div>
        
        <div className="space-y-4 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl font-headline font-bold">Elas contam como foi</h3>
          <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 cursor-pointer group">
            {videoThumb && (
              <Image src={videoThumb.imageUrl} alt="Video testimonial thumbnail" width={800} height={450} className="w-full" data-ai-hint={videoThumb.imageHint} />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            </div>
          </div>
        </div>

        <div className="space-y-8 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
          <p className="text-2xl md:text-3xl font-bold font-headline text-primary">
            💜 Elas conseguiram. Agora é a sua vez.
          </p>
          <Button asChild size="lg" className="rounded-lg text-lg px-8 py-6 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300">
            <a href="https://wa.me/?text=Quero%20garantir%20minha%20vaga%20no%20S.L.I.M!" target="_blank" rel="noopener noreferrer">
              👉 Garantir minha vaga no S.L.I.M
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

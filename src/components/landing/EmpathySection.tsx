import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const EmpathySection = () => {
  const victorImage = PlaceHolderImages.find(p => p.id === 'empathy-image');
  return (
    <section className="w-full bg-card py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 text-left space-y-8 animate-on-scroll">
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              Eu sei como é olhar no espelho e <span className="font-bold text-primary">não se reconhecer mais.</span> A rotina, o trabalho, a família... e quando você percebe, cuidar de si ficou em último lugar.
            </p>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              Mas a verdade é: você não precisa viver cansada e insatisfeita com o corpo. Dá pra mudar isso com o tempo que você tem — e com o método certo.
            </p>
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-lg text-muted-foreground">
                “Sou o Victor Pablo, criador do Método S.L.I.M. Há anos ajudo mulheres a conquistarem o corpo que desejam de forma leve, prática e sem precisar viver dentro da academia.”
              </p>
            </div>
            <a href="#method" className="text-primary font-bold text-lg inline-block hover:underline">
              👉 Descubra como o S.L.I.M funciona
            </a>
          </div>
          <div className="lg:col-span-2 relative h-[500px] w-full animate-on-scroll hidden lg:block" style={{ animationDelay: '0.2s' }}>
             {victorImage && (
              <Image
                src={victorImage.imageUrl}
                alt={victorImage.description}
                fill
                className="rounded-2xl shadow-2xl shadow-primary/20 object-cover"
                data-ai-hint={victorImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmpathySection;

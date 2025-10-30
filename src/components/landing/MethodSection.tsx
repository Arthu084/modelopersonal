import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, UtensilsCrossed, MessageSquare, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface MethodCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: string;
}

const MethodCard = ({ icon: Icon, title, description, delay }: MethodCardProps) => (
  <div className="animate-on-scroll" style={{ animationDelay: delay }}>
    <Card className="bg-card border-border h-full text-center hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 rounded-2xl">
      <CardHeader className="items-center p-4">
        <div className="bg-primary/10 p-3 rounded-full mb-2">
          <Icon className="w-10 h-10 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl text-card-foreground font-normal">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  </div>
);

const MethodSection = () => {
  const methods = [
    { icon: Dumbbell, title: "Treinos Inteligentes", description: "curtos, precisos e adaptados ao seu nível — funcionam mesmo com 40 minutos por dia." },
    { icon: UtensilsCrossed, title: "Alimentação Estratégica", description: "sem dietas malucas, apenas ajustes simples pra manter resultados duradouros." },
    { icon: MessageSquare, title: "Acompanhamento Pessoal", description: "contato direto com o Ricardo e feedbacks individuais pra garantir evolução constante." },
    { icon: Users, title: "Comunidade Exclusiva", description: "Acesso a um grupo de mulheres com os mesmos objetivos, para motivação e troca de experiências." },
  ];

  return (
    <section id="method" className="w-full bg-background py-8 lg:py-8">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
        <div className="space-y-4 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground">
            O que faz o Método <br /> Dutra funcionar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {methods.map((method, index) => (
            <MethodCard key={method.title} {...method} delay={`${index * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MethodSection;

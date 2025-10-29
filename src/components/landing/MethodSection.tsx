import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, UtensilsCrossed, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface MethodCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: string;
}

const MethodCard = ({ icon: Icon, title, description, delay }: MethodCardProps) => (
  <div className="animate-on-scroll" style={{ animationDelay: delay }}>
    <Card className="bg-card border-border h-full text-center hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
      <CardHeader className="items-center">
        <div className="bg-primary/10 p-4 rounded-full mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </div>
);

const MethodSection = () => {
  const methods = [
    { icon: Dumbbell, title: "1️⃣ Treinos Inteligentes", description: "curtos, precisos e adaptados ao seu nível — funcionam mesmo com 40 minutos por dia." },
    { icon: UtensilsCrossed, title: "2️⃣ Alimentação Estratégica", description: "sem dietas malucas, apenas ajustes simples pra manter resultados duradouros." },
    { icon: MessageSquare, title: "3️⃣ Acompanhamento Pessoal", description: "contato direto com o Victor e feedbacks individuais pra garantir evolução constante." },
  ];

  return (
    <section id="method" className="w-full bg-background py-12">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-12">
        <div className="space-y-4 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-headline font-bold">
            Entenda o que faz o Método S.L.I.M funcionar
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            O S.L.I.M (Sistema de Liberação Inteligente de Metabolismo) é um protocolo criado para mulheres reais — com pouco tempo, mas muita vontade de mudar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <MethodCard key={method.title} {...method} delay={`${index * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MethodSection;

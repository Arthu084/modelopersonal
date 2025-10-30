import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter experiência na academia?",
    answer: "Não! Os treinos são adaptados ao seu nível, seja você iniciante ou avançada. Começamos de onde você está e evoluímos juntas."
  },
  {
    question: "Funciona pra quem treina em casa?",
    answer: "Sim. Mais de 60% das alunas treinam em casa e têm ótimos resultados. O plano é totalmente adaptado aos equipamentos que você tem (ou à falta deles)."
  },
  {
    question: "Em quanto tempo vejo resultado?",
    answer: "De 2 a 4 semanas já dá pra ver diferença no espelho e na roupa. Resultados mais expressivos aparecem com a consistência ao longo dos primeiros 3 meses."
  },
  {
    question: "Tem acompanhamento do Ricardo?",
    answer: "Sim. O grande diferencial do método é o meu acompanhamento direto. Você terá contato comigo via WhatsApp para tirar dúvidas, ajustar o treino e garantir que você esteja sempre evoluindo."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="w-full bg-background pt-16 lg:pt-20 pb-16 lg:pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl mx-auto space-y-4">
        <div className="text-center space-y-4 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-2xl overflow-hidden shadow-lg">
                <AccordionTrigger className="text-left font-bold text-lg p-6 hover:no-underline text-card-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

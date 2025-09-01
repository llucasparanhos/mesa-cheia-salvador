import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "Como funciona o processo de doação?",
    answer: "Todas as doações são processadas de forma segura através de nossa plataforma. Você pode escolher valores predefinidos ou inserir um valor personalizado. Aceitamos cartão de crédito e PIX, e você receberá um comprovante por email."
  },
  {
    id: "item-2",
    question: "Para onde vão as doações?",
    answer: "100% das doações vão diretamente para as ONGs parceiras que atuam no combate à fome em Salvador. Cada organização é verificada e auditada regularmente para garantir que os recursos cheguem aos beneficiários."
  },
  {
    id: "item-3",
    question: "Posso acompanhar o impacto da minha doação?",
    answer: "Sim! Enviamos relatórios trimestrais por email mostrando como sua doação foi utilizada, quantas famílias foram beneficiadas e o impacto gerado na comunidade."
  },
  {
    id: "item-4",
    question: "É possível fazer doações recorrentes?",
    answer: "Sim, você pode configurar doações mensais automáticas. Isso nos ajuda a planejar melhor as ações e garante um impacto contínuo no combate à fome."
  },
  {
    id: "item-5",
    question: "As doações têm dedução no Imposto de Renda?",
    answer: "Sim, doações para nossas ONGs parceiras são dedutíveis do Imposto de Renda conforme legislação vigente. Fornecemos todos os comprovantes necessários."
  },
  {
    id: "item-6",
    question: "Como posso me voluntariar além de doar?",
    answer: "Além das doações financeiras, você pode se cadastrar como voluntário através da nossa página de contato. Sempre precisamos de ajuda em campanhas, distribuição de alimentos e ações comunitárias."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre doações e nosso trabalho
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-background border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
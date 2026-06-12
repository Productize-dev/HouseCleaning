import { SectionHeader } from "@/components/landing/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { business } from "@/lib/business";
import { homepageFaqs } from "@/lib/faqs";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-muted/30"
    >
      <div className="container-narrow">
        <SectionHeader
          id="faq-heading"
          eyebrow="FAQ"
          title="Common Questions About Our Cleaning Services"
          description={`Answers for homeowners and businesses searching for cleaning services in Hales Corners and ${business.serviceRegion}.`}
        />

        <Accordion className="mt-12 overflow-hidden rounded-3xl border border-border bg-card px-6 shadow-[var(--shadow-card)]">
          {homepageFaqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-base font-semibold hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

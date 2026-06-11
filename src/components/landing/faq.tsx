import { SectionHeader } from "@/components/landing/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { business, serviceAreaSummary } from "@/lib/business";

const faqs = [
  {
    question: "What areas does Fresh Cleaning Place serve?",
    answer: `We provide residential and commercial cleaning throughout ${business.serviceRegion} — ${serviceAreaSummary}`,
  },
  {
    question: "Do you offer both residential and commercial cleaning?",
    answer:
      "Yes. We clean homes, offices, retail spaces, and commercial restrooms. Many clients use us for recurring house cleaning; we also serve small businesses and office facilities.",
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer:
      "Yes. Our professional crews arrive with their own tools and cleaning products for every visit — residential deep cleans, commercial restrooms, and specialty jobs included.",
  },
  {
    question: "How do I get a cleaning estimate?",
    answer: `Call ${business.phone} or email ${business.email} for a free estimate. We offer house cleaning, commercial cleaning, deep cleaning, window cleaning, and home organizing with flexible scheduling.`,
  },
  {
    question: "Do you offer recurring cleaning?",
    answer:
      "Yes. We offer weekly, biweekly, and monthly plans for homes and businesses with consistent crews and outstanding communication.",
  },
  {
    question: "Is there a discount for first-time customers?",
    answer: business.promo,
  },
] as const;

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
          {faqs.map((faq) => (
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

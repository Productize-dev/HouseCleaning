import { SectionHeader } from "@/components/landing/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { business, serviceAreas } from "@/lib/business";

const faqs = [
  {
    question: "What areas does Fresh Cleaning Place serve?",
    answer: `We provide residential house cleaning throughout ${business.serviceRegion} — including Hales Corners, Greenfield, West Allis, Muskego, ${serviceAreas.slice(6).join(", ")}, and nearby communities.`,
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer:
      "Yes. Our professional crews arrive with their own tools and cleaning products for every home visit, including deep cleans and basement specialty jobs.",
  },
  {
    question: "How do I get a cleaning estimate?",
    answer: `Call ${business.phone} or email ${business.email} for a free estimate. We offer regular house cleaning, deep cleaning, window cleaning, and home organizing with flexible scheduling.`,
  },
  {
    question: "Do you offer recurring house cleaning?",
    answer:
      "Yes. We offer weekly, biweekly, and monthly plans with consistent crews and outstanding communication — many clients have used us for years.",
  },
  {
    question: "Is there a discount for first-time customers?",
    answer: business.promo,
  },
  {
    question: "Do you offer home organizing and decluttering?",
    answer:
      "Yes. We provide customized organizing solutions to transform cluttered spaces into calm, functional rooms — with our 100% satisfaction guarantee.",
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
          title="Common Questions About House Cleaning"
          description={`Answers for homeowners searching for residential cleaning in Hales Corners, ${business.serviceRegion}.`}
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

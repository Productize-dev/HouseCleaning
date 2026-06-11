import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { business } from "@/lib/business";

type RelatedLink = { href: string; label: string };

type RelatedGroup = {
  title: string;
  links: RelatedLink[];
};

type ContentBlocksProps = {
  intro: string;
  localNote?: string;
  includes?: readonly string[];
  benefits?: readonly string[];
  faqs: readonly { question: string; answer: string }[];
  relatedGroups?: RelatedGroup[];
  relatedLinks?: RelatedLink[];
  relatedTitle?: string;
};

function RelatedLinksGrid({ links }: { links: RelatedLink[] }) {
  return (
    <ul className="m-0 grid list-none grid-cols-1 gap-2 p-0 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
      {links.map((link) => (
        <li key={link.href} className="min-w-0">
          <Link
            href={link.href}
            className="flex h-full min-h-11 w-full items-center justify-center rounded-xl border border-border bg-card px-3 py-2.5 text-center text-sm font-medium leading-snug text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary sm:min-h-12 sm:px-4 sm:py-3"
          >
            <span className="break-words">{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ContentBlocks({
  intro,
  localNote,
  includes,
  benefits,
  faqs,
  relatedGroups,
  relatedLinks,
  relatedTitle = "Related pages",
}: ContentBlocksProps) {
  const groups =
    relatedGroups ??
    (relatedLinks && relatedLinks.length > 0
      ? [{ title: relatedTitle, links: relatedLinks }]
      : []);
  return (
    <div className="container-narrow py-12 sm:py-16">
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p className="text-lg leading-relaxed">{intro}</p>
        {localNote && (
          <p className="mt-4 rounded-2xl border border-primary/15 bg-primary/5 p-5 text-foreground">
            {localNote}
          </p>
        )}
      </div>

      {includes && includes.length > 0 && (
        <section className="mt-12" aria-labelledby="includes-heading">
          <h2 id="includes-heading" className="text-2xl font-semibold">
            What&apos;s included
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {includes.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-fresh"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {benefits && benefits.length > 0 && (
        <section className="mt-12" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-2xl font-semibold">
            Why clients choose us
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-semibold">
          Frequently asked questions
        </h2>
        <Accordion className="mt-6 rounded-2xl border border-border bg-card px-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-left font-medium hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section
        className="mt-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-brand/5 p-8 text-center"
        aria-label="Call to action"
      >
        <h2 className="text-xl font-semibold">Ready to book?</h2>
        <p className="mt-2 text-muted-foreground">
          {business.promo} Call{" "}
          <a
            href={business.phoneHref}
            className="font-semibold text-primary hover:underline"
          >
            {business.phone}
          </a>{" "}
          or email{" "}
          <a
            href={business.emailHref}
            className="font-semibold text-primary hover:underline"
          >
            {business.email}
          </a>
          .
        </p>
      </section>

      {groups.length > 0 && (
        <nav className="mt-12" aria-label={relatedTitle}>
          {groups.length > 1 ? (
            <h2 className="text-lg font-semibold sm:text-xl">
              {relatedTitle}
            </h2>
          ) : null}
          <div className={groups.length > 1 ? "mt-6 space-y-8" : "space-y-4"}>
            {groups.map((group) => (
              <section key={group.title}>
                <h3
                  className={
                    groups.length > 1
                      ? "text-base font-semibold text-foreground"
                      : "text-lg font-semibold sm:text-xl"
                  }
                >
                  {group.title}
                </h3>
                <div className="mt-3 sm:mt-4">
                  <RelatedLinksGrid links={group.links} />
                </div>
              </section>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}

import Script from "next/script";

export function JsonLd({ data }: { data: Record<string, unknown> | unknown[] }) {
  return (
    <Script
      id={`jsonld-${JSON.stringify(data).slice(0, 24)}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

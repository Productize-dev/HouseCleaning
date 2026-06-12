import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MapPin, Phone } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { business, navLinks } from "@/lib/business";
import { seoAreas } from "@/lib/seo/areas";
import { seoServices } from "@/lib/seo/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-gradient-to-br from-foreground to-[#0f1f1a] text-background">
      <div className="container-narrow py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="inline-flex rounded-xl bg-white p-2 shadow-sm">
              <Image
                src="/images/logo.png"
                alt={business.name}
                width={578}
                height={578}
                className="h-14 w-14 object-contain sm:h-16 sm:w-16"
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-background/75">
              Premium residential and commercial cleaning based in Hales Corners,
              WI. Serving homes and businesses across {business.serviceRegion}{" "}
              with quality you can see and service you can trust.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-fresh"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Cleaning services">
            <p className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {seoServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-background/70 transition-colors hover:text-fresh"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Service areas">
            <p className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Areas
            </p>
            <ul className="mt-4 space-y-2">
              {seoAreas.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-sm text-background/70 transition-colors hover:text-fresh"
                  >
                    {area.city}, WI
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-sm font-semibold text-fresh hover:underline"
                >
                  All service areas →
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-background/75">
              <li>
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 font-semibold text-background hover:text-fresh hover:underline"
                >
                  <Phone className="size-4" aria-hidden />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={business.emailHref}
                  className="hover:text-fresh hover:underline"
                >
                  {business.email}
                </a>
              </li>
              <li className="inline-flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>{business.address.full}</span>
              </li>
              <li>{business.hours}</li>
              <li className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                <a
                  href={business.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-background hover:text-fresh hover:underline"
                >
                  Facebook
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-background hover:text-fresh hover:underline"
                >
                  Instagram
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
                <a
                  href={business.nextdoorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-background hover:text-fresh hover:underline"
                >
                  Nextdoor
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-background/60 sm:flex-row sm:text-left">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Residential &amp; commercial cleaning · Hales Corners, WI 53130</p>
        </div>
      </div>
    </footer>
  );
}

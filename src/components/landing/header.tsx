import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, Phone, Sparkles } from "lucide-react";

import { MobileNav } from "@/components/landing/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { business, navLinks } from "@/lib/business";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-white/10 bg-gradient-to-r from-brand to-primary text-white sm:block">
        <div className="container-narrow flex h-9 items-center justify-between text-xs">
          <p className="inline-flex items-center gap-1.5 font-medium">
            <Sparkles className="size-3.5" aria-hidden />
            {business.promo}
          </p>
          <div className="flex items-center gap-4 text-white/90">
            <span className="hidden items-center gap-1.5 lg:inline-flex">
              <Clock className="size-3.5 shrink-0" aria-hidden />
              {business.hours}
            </span>
            <a
              href={business.emailHref}
              className="inline-flex items-center gap-1.5 font-medium hover:text-white hover:underline"
            >
              <Mail className="size-3.5 shrink-0" aria-hidden />
              <span className="hidden md:inline">{business.email}</span>
              <span className="md:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border/60 bg-white/80 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
        <div className="container-narrow flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex min-w-0 items-center"
            aria-label={`${business.name} — home`}
          >
            <Image
              src="/images/logo.png"
              alt={business.name}
              width={160}
              height={48}
              className="h-10 w-auto shrink-0 object-contain sm:h-11"
              priority
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 xl:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={business.phoneHref}
              aria-label={`Call for a free estimate at ${business.phone}`}
              className={cn(
                buttonVariants({ size: "sm" }),
                "hidden gap-1.5 bg-gradient-to-r from-primary to-fresh text-white shadow-md hover:opacity-90 sm:inline-flex"
              )}
            >
              <Phone className="size-4" aria-hidden />
              Free Estimate
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}

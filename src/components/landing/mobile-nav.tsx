"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Menu, Phone } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { business, navLinks } from "@/lib/business";
import { cn } from "@/lib/utils";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "xl:hidden"
        )}
        aria-label="Open menu"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <Image
            src="/images/logo.png"
            alt={business.name}
            width={578}
            height={578}
            className="h-10 w-10 object-contain"
          />
        </SheetHeader>
        <nav
          aria-label="Mobile navigation"
          className="mt-8 flex flex-col gap-1 px-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 space-y-3 border-t border-border px-4 pt-6">
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full flex-col items-center justify-center gap-1 rounded-lg bg-brand px-4 py-3 text-white"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              <Calendar className="size-4" aria-hidden />
              Book Online
            </span>
            <span className="text-xs font-medium text-white/85">
              Free in-home estimate
            </span>
          </a>
          <a
            href={business.phoneHref}
            className="flex w-full flex-col items-center justify-center gap-1 rounded-lg bg-primary px-4 py-3 text-primary-foreground"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              <Phone className="size-4" aria-hidden />
              Call for Estimate
            </span>
            <span className="text-xs font-medium text-primary-foreground/85">
              {business.phone}
            </span>
          </a>
          <a
            href={business.emailHref}
            className="flex w-full items-center justify-center rounded-lg border border-border px-4 py-3 text-sm font-medium"
          >
            Email Us
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}

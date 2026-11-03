import { Leaf } from "@/components/seasonal/leaf";
import { cn } from "@/lib/utils";

type LeafSpec = {
  variant: "maple" | "oak" | "simple";
  tone: "amber" | "brand" | "primary" | "fresh";
  className: string;
};

const HERO_LEAVES: LeafSpec[] = [
  {
    variant: "maple",
    tone: "brand",
    className:
      "absolute left-[2%] top-[8%] size-16 rotate-[-18deg] opacity-[0.22] animate-leaf-drift sm:size-24",
  },
  {
    variant: "oak",
    tone: "amber",
    className:
      "absolute left-[12%] top-[22%] size-10 rotate-[28deg] opacity-[0.18] animate-leaf-drift-delayed sm:size-14",
  },
  {
    variant: "simple",
    tone: "brand",
    className:
      "absolute left-[6%] top-[48%] size-8 rotate-[-8deg] opacity-[0.16] sm:size-11",
  },
  {
    variant: "maple",
    tone: "amber",
    className:
      "absolute left-[18%] bottom-[18%] size-12 rotate-[12deg] opacity-[0.2] animate-leaf-drift sm:size-16",
  },
  {
    variant: "oak",
    tone: "brand",
    className:
      "absolute left-[28%] top-[6%] size-9 rotate-[40deg] opacity-[0.14] hidden sm:block",
  },
  {
    variant: "maple",
    tone: "brand",
    className:
      "absolute right-[4%] top-[10%] size-20 rotate-[16deg] opacity-[0.2] animate-leaf-drift-delayed sm:size-28",
  },
  {
    variant: "oak",
    tone: "amber",
    className:
      "absolute right-[14%] top-[28%] size-12 rotate-[-22deg] opacity-[0.18] sm:size-16",
  },
  {
    variant: "simple",
    tone: "amber",
    className:
      "absolute right-[8%] top-[46%] size-9 rotate-[32deg] opacity-[0.16] animate-leaf-drift sm:size-12",
  },
  {
    variant: "maple",
    tone: "brand",
    className:
      "absolute right-[18%] bottom-[22%] size-14 rotate-[-14deg] opacity-[0.2] animate-leaf-drift-delayed sm:size-20",
  },
  {
    variant: "oak",
    tone: "primary",
    className:
      "absolute right-[30%] top-[12%] size-10 rotate-[8deg] opacity-[0.12] hidden lg:block",
  },
  {
    variant: "maple",
    tone: "amber",
    className:
      "absolute left-[42%] top-[4%] size-11 rotate-[-30deg] opacity-[0.14] hidden md:block animate-leaf-drift",
  },
  {
    variant: "simple",
    tone: "brand",
    className:
      "absolute left-[48%] bottom-[8%] size-10 rotate-[18deg] opacity-[0.15] hidden lg:block",
  },
  {
    variant: "oak",
    tone: "amber",
    className:
      "absolute left-[36%] top-[55%] size-8 rotate-[-40deg] opacity-[0.12] hidden xl:block",
  },
  {
    variant: "maple",
    tone: "brand",
    className:
      "absolute right-[40%] bottom-[12%] size-12 rotate-[24deg] opacity-[0.14] hidden lg:block animate-leaf-drift",
  },
];

const BAND_LEAVES: LeafSpec[] = [
  {
    variant: "maple",
    tone: "amber",
    className:
      "absolute -left-2 top-2 size-12 rotate-[-20deg] opacity-40 sm:size-16",
  },
  {
    variant: "oak",
    tone: "brand",
    className:
      "absolute left-[18%] -top-1 size-9 rotate-[25deg] opacity-30 sm:size-12",
  },
  {
    variant: "simple",
    tone: "amber",
    className:
      "absolute right-[22%] top-3 size-8 rotate-[-12deg] opacity-28 sm:size-10",
  },
  {
    variant: "maple",
    tone: "brand",
    className:
      "absolute -right-1 bottom-2 size-11 rotate-[22deg] opacity-35 sm:size-14",
  },
  {
    variant: "oak",
    tone: "amber",
    className:
      "absolute right-[8%] -bottom-1 size-9 rotate-[-28deg] opacity-25",
  },
];

type LeafFieldProps = {
  className?: string;
  density?: "hero" | "band";
};

/** Full-bleed decorative leaf scatter — aria-hidden, no layout impact */
export function LeafField({ className, density = "hero" }: LeafFieldProps) {
  const leaves = density === "hero" ? HERO_LEAVES : BAND_LEAVES;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none",
        className
      )}
      aria-hidden
    >
      {leaves.map((leaf, i) => (
        <Leaf
          key={`${leaf.variant}-${i}`}
          variant={leaf.variant}
          tone={leaf.tone}
          className={leaf.className}
        />
      ))}
    </div>
  );
}

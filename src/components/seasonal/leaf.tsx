import { cn } from "@/lib/utils";

type LeafProps = {
  className?: string;
  variant?: "maple" | "oak" | "simple";
  tone?: "amber" | "brand" | "primary" | "fresh";
};

const toneClass = {
  amber: "text-amber",
  brand: "text-brand",
  primary: "text-primary",
  fresh: "text-fresh",
} as const;

/** Decorative autumn leaf — always aria-hidden when used as accent */
export function Leaf({
  className,
  variant = "maple",
  tone = "amber",
}: LeafProps) {
  const shared = cn("shrink-0", toneClass[tone], className);

  if (variant === "simple") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={shared}
        aria-hidden
      >
        <path d="M12 2c.4 3.2-1.2 5.4-3.6 7.2 2 .4 3.4 1.6 4.2 3.4.8-1.8 2.2-3 4.2-3.4C14.4 7.4 12.8 5.2 12 2zm0 9.2c-1.6 1.8-2.2 4-1.8 6.6L12 22l1.8-4.2c.4-2.6-.2-4.8-1.8-6.6z" />
      </svg>
    );
  }

  if (variant === "oak") {
    return (
      <svg
        viewBox="0 0 32 40"
        fill="currentColor"
        className={shared}
        aria-hidden
      >
        <path d="M16 2c2.5 3.5 7 5.5 10 8.5 1.5 1.5 2.5 3.5 2 5.5-.4 1.6-1.6 2.8-3 3.5 1.8 1.2 2.8 3.2 2.5 5.2-.3 2-1.8 3.5-3.8 4.2 1.2 1.5 1.5 3.5.8 5.2-.8 2-2.8 3.2-5 3.2v-2.5c1.2 0 2.2-.6 2.6-1.6.5-1.1.2-2.2-.6-3l-1.5-1.4 2 .4c1.4.3 2.5-.4 2.8-1.5.3-1.2-.4-2.4-1.6-3l-1.8-.9 2.2.2c1.3.1 2.4-.8 2.6-2 .2-1.3-.7-2.5-2-3.1C19.2 13.2 16.8 11 16 8.5c-.8 2.5-3.2 4.7-5.8 6.2-1.3.6-2.2 1.8-2 3.1.2 1.2 1.3 2.1 2.6 2l2.2-.2-1.8.9c-1.2.7-1.9 1.9-1.6 3.1.3 1.1 1.4 1.8 2.8 1.5l2-.4-1.5 1.4c-.8.8-1.1 1.9-.6 3 .4 1 1.4 1.6 2.6 1.6V36c-2.2 0-4.2-1.2-5-3.2-.7-1.7-.4-3.7.8-5.2-2-.7-3.5-2.2-3.8-4.2-.3-2 .7-4 2.5-5.2-1.4-.7-2.6-1.9-3-3.5-.5-2 .5-4 2-5.5C9 7.5 13.5 5.5 16 2z" />
      </svg>
    );
  }

  /* maple */
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      className={shared}
      aria-hidden
    >
      <path d="M20 2.5c.6 2.8-.2 5-1.8 7.2 1.4-.2 2.8.1 4 .8 1.6-2.2 3.8-3.6 6.5-4-.8 2.6-.2 5 1.2 7.2 1.8-.6 3.6-.5 5.4.4-1.4 1.6-2 3.6-1.8 5.6 1.6.8 2.8 2.2 3.4 4-2 .4-3.6 1.6-4.6 3.4 1.2 1.4 1.6 3.2 1.2 5-1.8-.6-3.6-.4-5.2.6.2 2 .8 3.8 2 5.4-2.2-.4-4.2.2-5.8 1.6.4 1.8.2 3.6-.6 5.2L20 37.5l-1.7-2.7c-.8-1.6-1-3.4-.6-5.2-1.6-1.4-3.6-2-5.8-1.6 1.2-1.6 1.8-3.4 2-5.4-1.6-1-3.4-1.2-5.2-.6-.4-1.8 0-3.6 1.2-5-1-1.8-2.6-3-4.6-3.4.6-1.8 1.8-3.2 3.4-4 .2-2-.4-4-1.8-5.6 1.8-.9 3.6-1 5.4-.4 1.4-2.2 2-4.6 1.2-7.2 2.7.4 4.9 1.8 6.5 4 1.2-.7 2.6-1 4-.8C20.2 7.5 19.4 5.3 20 2.5z" />
    </svg>
  );
}

type LeafClusterProps = {
  className?: string;
};

/** Sparse corner flourish for hero / CTA */
export function LeafCluster({ className }: LeafClusterProps) {
  return (
    <div
      className={cn("pointer-events-none relative select-none", className)}
      aria-hidden
    >
      <Leaf
        variant="maple"
        tone="amber"
        className="absolute size-14 opacity-[0.18] animate-leaf-drift sm:size-20"
      />
      <Leaf
        variant="oak"
        tone="brand"
        className="absolute left-10 top-6 size-10 rotate-[-25deg] opacity-[0.14] animate-leaf-drift-delayed sm:left-14 sm:size-14"
      />
      <Leaf
        variant="simple"
        tone="primary"
        className="absolute left-4 top-16 size-8 rotate-[20deg] opacity-[0.12] sm:top-20 sm:size-10"
      />
    </div>
  );
}

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
  align?: "center" | "left";
  className?: string;
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  id,
  align = "center",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        align === "left" && "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest",
            dark
              ? "border-white/20 bg-white/10 text-white"
              : "border-primary/20 bg-primary/5 text-primary"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "font-semibold tracking-tight",
          dark ? "text-white" : "text-foreground",
          eyebrow ? "mt-4" : "",
          align === "center"
            ? "text-3xl sm:text-4xl lg:text-[2.5rem]"
            : "text-2xl sm:text-3xl"
        )}
      >
        {title}
      </h2>
      {align === "center" && <div className="section-divider" aria-hidden />}
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

export function SeoShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

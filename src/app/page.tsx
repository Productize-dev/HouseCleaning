import { About } from "@/components/landing/about";
import { ContactCta } from "@/components/landing/contact-cta";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Gallery } from "@/components/landing/gallery";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Organizing } from "@/components/landing/organizing";
import { Process } from "@/components/landing/process";
import { Reviews } from "@/components/landing/reviews";
import { ServiceAreas } from "@/components/landing/service-areas";
import { Services } from "@/components/landing/services";
import { ShowcaseBand } from "@/components/landing/showcase-band";
import { TrustBar } from "@/components/landing/trust-bar";
import { WhyUs } from "@/components/landing/why-us";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShowcaseBand />
        <TrustBar />
        <WhyUs />
        <Services />
        <Process />
        <Reviews />
        <Gallery />
        <ServiceAreas />
        <About />
        <Organizing />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}

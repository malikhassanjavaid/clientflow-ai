import { HeroSection } from "@/components/marketing/hero-section";
import { SiteHeader } from "@/components/marketing/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <section id="product-preview" />
        <section id="how-it-works" />
        <section id="why-clientflow" />
        <section id="human-control" />
      </main>
    </div>
  );
}

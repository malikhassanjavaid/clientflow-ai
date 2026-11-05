import { FinalCta } from "@/components/marketing/final-cta";
import { HeroSection } from "@/components/marketing/hero-section";
import { HumanControlSection } from "@/components/marketing/human-control-section";
import { ProductPreview } from "@/components/marketing/product-preview";
import { RequestTransformation } from "@/components/marketing/request-transformation";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { WorkflowSection } from "@/components/marketing/workflow-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ProductPreview />
        <RequestTransformation />
        <WorkflowSection />
        <HumanControlSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

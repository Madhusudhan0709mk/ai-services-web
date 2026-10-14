import type { Metadata } from "next";
import { About } from "@/components/About";
import { siteAssetUrl, siteJsonLd, siteUrl } from "@/config/site";
import { MotionRuntime } from "@/ui/MotionRuntime";
import { motionDefinitions, interactionDefinitions } from "@/components/About/About/About.motion";

const structuredData = [];

export const metadata: Metadata = {
  title: "AI Workflow Automation Framer Template - Aoutive",
  description:
    "Premium AI workflow automation Framer template for automation platforms and operations SaaS. Engine section, infrastructure block, five use case cards, integrations, three-tier pricing, FAQ, and CMS articles. Framer template for AI automation SaaS.",
  alternates: { canonical: siteUrl("/about") },
  openGraph: {
    title: "AI Workflow Automation Framer Template - Aoutive",
    description:
      "Premium AI workflow automation Framer template for automation platforms and operations SaaS. Engine section, infrastructure block, five use case cards, integrations, three-tier pricing, FAQ, and CMS articles. Framer template for AI automation SaaS.",
    url: siteUrl("/about"),
    images: [siteAssetUrl("https://framerusercontent.com/images/sRE45NqOudofm2myw2fN0WiezU.png")],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflow Automation Framer Template - Aoutive",
    description:
      "Premium AI workflow automation Framer template for automation platforms and operations SaaS. Engine section, infrastructure block, five use case cards, integrations, three-tier pricing, FAQ, and CMS articles. Framer template for AI automation SaaS.",
    images: [siteAssetUrl("https://framerusercontent.com/images/sRE45NqOudofm2myw2fN0WiezU.png")],
  },
};

export default function Page() {
  return (
    <>
      {structuredData.map((value, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: siteJsonLd(value) }}
        />
      ))}
      <About />
      <MotionRuntime definitions={motionDefinitions} interactions={interactionDefinitions} />
    </>
  );
}

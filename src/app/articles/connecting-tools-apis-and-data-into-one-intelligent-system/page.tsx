import type { Metadata } from "next";
import { ArticlesConnectingToolsApisAndDataIntoOneIntelligentSystem } from "@/components/ArticlesConnectingToolsApisAndDataIntoOneIntelligentSystem";
import { siteAssetUrl, siteJsonLd, siteUrl } from "@/config/site";
import { MotionRuntime } from "@/ui/MotionRuntime";
import {
  motionDefinitions,
  interactionDefinitions,
} from "@/components/ArticlesConnectingToolsApisAndDataIntoOneIntelligentSystem/ArticlesConnectingToolsApisAndDataIntoOneIntelligentSystem/ArticlesConnectingToolsApisAndDataIntoOneIntelligentSystem.motion";

const structuredData = [];

export const metadata: Metadata = {
  title: "AI Workflow Automation Framer Template - Aoutive",
  description:
    "Premium AI workflow automation Framer template for automation platforms and operations SaaS. Engine section, infrastructure block, five use case cards, integrations, three-tier pricing, FAQ, and CMS articles. Framer template for AI automation SaaS.",
  alternates: {
    canonical: siteUrl("/articles/connecting-tools-apis-and-data-into-one-intelligent-system"),
  },
  openGraph: {
    title: "AI Workflow Automation Framer Template - Aoutive",
    description:
      "Premium AI workflow automation Framer template for automation platforms and operations SaaS. Engine section, infrastructure block, five use case cards, integrations, three-tier pricing, FAQ, and CMS articles. Framer template for AI automation SaaS.",
    url: siteUrl("/articles/connecting-tools-apis-and-data-into-one-intelligent-system"),
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
      <ArticlesConnectingToolsApisAndDataIntoOneIntelligentSystem />
      <MotionRuntime definitions={motionDefinitions} interactions={interactionDefinitions} />
    </>
  );
}

import type { Metadata } from "next";
import { Home } from "@/components/Home";
import { siteAssetUrl, siteJsonLd, siteUrl } from "@/config/site";
import { MotionRuntime } from "@/ui/MotionRuntime";
import { motionDefinitions, interactionDefinitions } from "@/components/Home/Home/Home.motion";

const structuredData = [];

export const metadata: Metadata = {
  title: "Autonexa — Workflow Automation SaaS",
  description:
    "A premium automation platform landing page with workflows, pricing, FAQ, and product sections.",
  alternates: { canonical: siteUrl("/") },
  openGraph: {
    title: "Autonexa — Workflow Automation SaaS",
    description:
      "A premium automation platform landing page with workflows, pricing, FAQ, and product sections.",
    url: siteUrl("/"),
    images: [siteAssetUrl("https://framerusercontent.com/images/sRE45NqOudofm2myw2fN0WiezU.png")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonexa — Workflow Automation SaaS",
    description:
      "A premium automation platform landing page with workflows, pricing, FAQ, and product sections.",
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
      <Home />
      <MotionRuntime definitions={motionDefinitions} interactions={interactionDefinitions} />
    </>
  );
}

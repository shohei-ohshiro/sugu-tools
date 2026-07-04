import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools";

const BASE = "https://sugu-tools-pi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    ...TOOLS.map((t) => ({
      url: `${BASE}/${t.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${BASE}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/about`, changeFrequency: "yearly", priority: 0.2 },
  ];
}

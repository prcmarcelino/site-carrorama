import { MetadataRoute } from "next";
import { site } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const base = site.baseUrl.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}

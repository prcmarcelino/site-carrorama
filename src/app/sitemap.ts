import { MetadataRoute } from "next";
import { site } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.baseUrl.replace(/\/$/, "");
  const routes = ["", "/plataforma", "/modulos", "/planos", "/sobre", "/contato"];
  return routes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}

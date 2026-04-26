import type { MetadataRoute } from "next";

const BASE = "https://heva.me";

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/klientidele", priority: 0.9, changeFrequency: "monthly" },
  { path: "/kulleritele", priority: 0.9, changeFrequency: "monthly" },
  { path: "/kuidas-tootab", priority: 0.8, changeFrequency: "monthly" },
  { path: "/meist", priority: 0.7, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.7, changeFrequency: "monthly" },
  { path: "/registreeru/autopark", priority: 0.7, changeFrequency: "monthly" },
  { path: "/karjaar", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blogi", priority: 0.6, changeFrequency: "weekly" },
  { path: "/press", priority: 0.5, changeFrequency: "monthly" },
  { path: "/support", priority: 0.6, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  const baseUrl = process.env.NEXT_PUBLIC_CANONICAL_BASE_URL || "https://www.nofakesd.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
};

export default robots;

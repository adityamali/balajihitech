import { products } from "@/data/data";

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://balajihitech.com";
  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/about</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${baseUrl}/products</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${baseUrl}/contact</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>0.6</priority>
      </url>
      <url>
        <loc>${baseUrl}/ethics</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>${baseUrl}/materials</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>0.7</priority>
      </url>
      ${products
        .map(
          (product) => `
        <url>
          <loc>${baseUrl}/product/${product.id}</loc>
          <lastmod>${currentDate}</lastmod>
          <priority>0.8</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/data";
import { notFound } from "next/navigation";
import { use } from "react";
import ProductDetails from "@/app/product/[id]/ProductDetails";

export default function ProductPage({ params }: { params: { id: string } }) {
  const resolvedParams = use(Promise.resolve(params));
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center mt-24 pt-8 pb-16">
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)]">
        {/* Schema.org structured data for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.title,
              description: product.description,
              image: product.image,
              offers: {
                "@type": "Offer",
                price: product.price,
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
              brand: {
                "@type": "Brand",
                name: "Balaji Hi-Tech Garments",
              },
            }),
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image with SEO attributes */}
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src={product.image || "/products/placeholder.jpg"}
              alt={`${product.title} - ${product.description}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Interactive Product Details */}
          <ProductDetails product={product} />
        </div>
      </div>
    </div>
  );
}

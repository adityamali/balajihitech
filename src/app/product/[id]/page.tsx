import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import ProductDetails from "./ProductDetails";
import { products, categories } from "@/data/data";

type Props = {
  params: Promise<{ id: string }>;
};

// Generate metadata for SEO
// export function generateMetadata({ params }: Props): Metadata {
//   const product = products.find(p => p.id === params.id);
  
//   if (!product) {
//     return {
//       title: "Product Not Found",
//       description: "The requested product could not be found."
//     };
//   }
  
//   const category = categories.find(c => c.catID === product.catID);
  
//   return {
//     title: product.title,
//     description: product.description,
//     openGraph: {
//       title: product.title,
//       description: product.description,
//       images: [
//         {
//           url: product.image ? new URL(product.image, 'http://localhost:3000').toString() : 'http://localhost:3000/products/placeholder.jpg',
//           width: 1200,
//           height: 630,
//           alt: product.title,
//         },
//       ],
//       type: "product",
//     },
//     keywords: [product.title, category?.name, "sustainable products", "eco-friendly"],
//   };
// }

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  
  if (!product) {
    notFound();
  }
  
  const category = categories.find(c => c.catID === product.catID);

  return (
    <main className="flex flex-col items-center justify-center mt-24 pt-8 pb-16">
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)]">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li className="flex items-center space-x-2">
              <span>/</span>
              <a href="/products" className="hover:text-primary">Products</a>
            </li>
            {category && (
              <li className="flex items-center space-x-2">
                <span>/</span>
                <a href={`/products?madeFor=${category.madeFor.toLowerCase()}`} className="hover:text-primary">
                  {category.name}
                </a>
              </li>
            )}
            <li className="flex items-center space-x-2">
              <span>/</span>
              <span className="text-primary font-medium" aria-current="page">
                {product.title.length > 30 ? `${product.title.substring(0, 30)}...` : product.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Schema.org structured data for rich results */}
        <Script
          id="product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://balajihitech.com/"
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Products",
                    item: "https://balajihitech.com/products"
                  },
                  category ? {
                    "@type": "ListItem",
                    position: 3,
                    name: category.name,
                    item: `https://balajihitech.com/products?madeFor=${category.madeFor.toLowerCase()}`
                  } : null,
                  {
                    "@type": "ListItem",
                    position: category ? 4 : 3,
                    name: product.title,
                    item: `https://balajihitech.com/product/${product.id}`
                  }
                ].filter(Boolean)
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                name: product.title,
                description: product.description,
                image: product.image ? `https://balajihitech.com${product.image}` : `https://balajihitech.com/products/placeholder.jpg`,
                category: category?.name,
                brand: {
                  "@type": "Brand",
                  name: "Balaji Hi-Tech Garments",
                },
                offers: {
                  "@type": "Offer",
                  url: `https://balajihitech.com/product/${product.id}`,
                  priceCurrency: "INR",
                  price: "499.00",
                  availability: "https://schema.org/InStock",
                  itemCondition: "https://schema.org/NewCondition"
                }
              }
            ])
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image with SEO attributes */}
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-md image-hover">
            <Image
              src={product.image || '/images/baby.png'}
              alt={`${product.title} - ${product.description}`}
              fill
              className="object-cover object-right-bottom"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Interactive Product Details */}
          <ProductDetails product={product} category={category} />
        </div>
      </div>
    </main>
  );
}
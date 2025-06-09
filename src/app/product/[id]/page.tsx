import { Metadata } from "next";
import Image from "next/image";
import { products, categories } from "@/data/data";
import { notFound } from "next/navigation";
import ProductDetails from "@/app/product/[id]/ProductDetails";

type Props = {
  params: { id: string };
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id);
  
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found."
    };
  }
  
  const category = categories.find(cat => cat.catID === product.catID);
  
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.image || "/products/placeholder.jpg",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      type: "product",
    },
    keywords: [product.title, category?.name, "sustainable products", "eco-friendly"],
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  const category = product ? categories.find(cat => cat.catID === product.catID) : null;

  if (!product) {
    notFound();
  }

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
                <a href={`/products?madeFor=${category.madeFor}`} className="hover:text-primary">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.title,
              description: product.description,
              image: product.image,
              category: category?.name,
              brand: {
                "@type": "Brand",
                name: "Balaji Hi-Tech Garments",
              },
            }),
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image with SEO attributes */}
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-md image-hover">
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
          <ProductDetails product={product} category={category} />
        </div>
      </div>
    </main>
  );
}
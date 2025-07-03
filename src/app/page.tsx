import Image from "next/image";
import Link from "next/link";
import CustomCarousel from "@/components/CustomCarousel";
import CompanyInfo from "@/components/CompanyInfo";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pb-16">
      {/* Hero Carousel */}
      <section className="w-full h-[70vh] md:h-64 bg-primary/20 py-20 md:py-64 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banners/bnr.webp"
            alt="gentle products for mom and baby"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 pt-24 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Gentle Products for Mom & Baby</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">Lovingly crafted, sustainable, and oh-so-soft.</p>
          <Link href="/products" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/80 transition-colors">
            Explore Products
          </Link>
        </div>
      </section>
      {/* For Baby / For Mom */}
      <section className="w-full container mx-auto mt-16 px-4">
        <div className="grid grid-cols-2 gap-8">
          <Link href="/products?madeFor=mother" className="group block">
            <div className="relative rounded-lg overflow-hidden h-28 md:h-64">
              <Image
                src="/images/mother.png"
                alt="Mother care products"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 hover:bg-black/30 flex items-center justify-center">
                <h2 className="text-black/70 group-hover:text-white text-3xl font-bold">For Mom</h2>
              </div>
            </div>
          </Link>
          <Link href="/products?madeFor=baby" className="group block">
            <div className="relative rounded-lg overflow-hidden h-28 md:h-64">
              <Image
                src="/images/baby.png"
                alt="Baby products"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-black/70 group-hover:text-white text-3xl font-bold">For Baby</h2>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Company Information Panel */}
      <CompanyInfo />

      {/* Featured Products */}
      <FeaturedProducts />          
    </main>
  );
}

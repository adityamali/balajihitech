import Image from "next/image";
import Link from "next/link";
import CustomCarousel from "@/components/CustomCarousel";
import CompanyInfo from "@/components/CompanyInfo";
import FeaturedProducts from "@/components/FeaturedProducts";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pb-16">
      {/* Asymmetrical Hero */}
      <section className="w-full min-h-[90vh] relative overflow-hidden bg-[#faf8f5] flex items-center">
        {/* Soft decorative blur shapes */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-secondary/40 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/30 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4"></div>

        <div className="container mx-auto px-6 md:px-12 pt-32 lg:pt-24 pb-20 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Text Box */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-sans font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
              Gentle care <br className="hidden md:block" />for the little ones.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-xl font-sans leading-relaxed">
              Experience the purest touch with our sustainable, consciously crafted garments designed for <strong className="text-gray-900 font-bold">mom and baby</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/products" className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-1 active:scale-95 text-center">
                Shop Everything
              </Link>
              <Link href="/about" className="bg-white border-2 border-primary text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/10 transition-all active:scale-95 text-center">
                Our Story
              </Link>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="w-full lg:w-1/2 relative h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center">
            {/* Main Arch Image */}
            <div className="relative w-[75%] h-[85%] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-soft border-8 border-white z-10">
              <Image
                src="/banners/bnr.webp"
                alt="Mother and baby"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Circle Image */}
            <div className="absolute bottom-10 left-0 w-[40%] aspect-square rounded-full overflow-hidden shadow-lg border-4 border-white z-20">
              <Image
                src="/images/baby.png"
                alt="Baby care"
                fill
                className="object-cover object-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Box Categories */}
      <section className="w-full container mx-auto mt-24 px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-[250px] md:auto-rows-[350px]">
          {/* Mom Card - Spans 7 cols */}
          <Link href="/products?madeFor=mother" className="lg:col-span-7 group relative rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-lg transition-all duration-500 hover:-translate-y-2 block border-4 border-white">
            <Image
              src="/images/mother.png"
              alt="Mother care products"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <span className="bg-white/90 backdrop-blur text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest text-gray-600 mb-3 inline-block shadow-sm">Explore</span>
                <h2 className="text-gray-900 bg-white/95 px-8 py-4 rounded-full text-3xl font-extrabold shadow-sm font-sans inline-block">For Mom</h2>
              </div>
              <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-soft transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-gray-900">
                →
              </div>
            </div>
          </Link>

          {/* Baby Card - Spans 5 cols - Offset visually */}
          <Link href="/products?madeFor=baby" className="lg:col-span-5 lg:mt-16 group relative rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-lg transition-all duration-500 hover:-translate-y-2 block border-4 border-white">
            <Image
              src="/images/baby.png"
              alt="Baby products"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <span className="bg-white/90 backdrop-blur text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest text-primary-900 mb-3 inline-block shadow-sm">Explore</span>
                <h2 className="text-gray-900 bg-white/95 px-8 py-4 rounded-full text-3xl font-extrabold shadow-sm font-sans inline-block">For Baby</h2>
              </div>
              <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-soft transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary-900">
                →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Company Information Panel */}
      <CompanyInfo />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Answer Engine Knowledge Base */}
      <FAQSection />
    </main>
  );
}

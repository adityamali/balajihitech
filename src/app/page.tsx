import Image from "next/image";
import Link from "next/link";
import CustomCarousel from "@/components/CustomCarousel";
import CompanyInfo from "@/components/CompanyInfo";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-28 pb-16">
      {/* Hero Carousel */}
      <section className="group w-screen overflow-hidden">
        <CustomCarousel>
          {[
            <div key="slide-1" className="min-w-full">
              <div className="relative w-full h-[60vh] aspect-video overflow-hidden">
                {/* Image Background */}  
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/banners/b2bg.png"
                    alt="Eco-friendly textile innovation banner"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'bottom right' }}
                    priority
                    sizes="100vw"
                  />
                </div>

                {/* Overlay Text Content */}
                <div className="relative z-10 h-full w-full p-8 md:p-16">
                  <div className="w-full h-full flex flex-col justify-center gap-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-black lg:text-white text-center md:text-left px-4 sm:px-20 font-[helvetica] animate-fade-in">
                      ECO FRIENDLY <br/> TEXTILE INNOVATION
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-bold text-primary text-right px-4 sm:px-20 font-[helvetica] animate-fade-in hidden lg:block">
                      SUSTAINABLE <br/> SOLUTIONS
                    </h1>
                    <Image 
                      src="/icon.png" 
                      height={100} 
                      width={300} 
                      alt="Balaji Hi-Tech Garments logo" 
                      className="mx-4 sm:mx-20 hidden lg:block"
                    />
                  </div>
                </div>
              </div>
            </div>,
            <div key="slide-2" className="min-w-full">
              <div className="relative w-full h-[60vh] aspect-video overflow-hidden">
                {/* Image Background */}  
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/banners/banner1.png"
                    alt="Sustainable solutions banner"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'bottom right' }}
                    priority
                    sizes="100vw"
                  />
                </div>

                {/* Overlay Text Content */}
                {/* <div className="relative z-10 h-full w-full p-8 md:p-16">
                  <div className="w-full h-full flex flex-col justify-end">
                    <Image 
                      src="/icon.png" 
                      height={100} 
                      width={300} 
                      alt="Balaji Hi-Tech Garments logo"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          ]}
        </CustomCarousel>
      </section>
      {/* For Baby / For Mom */}
      <section className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)] mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 sr-only">Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/products?madeFor=mother"
            className="relative rounded-lg p-6 py-24 text-center flex flex-col items-center justify-center gap-4 transition-all hover:scale-[1.02] overflow-hidden hover:shadow-lg hover:brightness-105 active:brightness-90 active:scale-95 image-hover"
          >
            <Image
              src="/images/mother.png"
              alt="Mother care products category"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="text-amber-900 relative z-10 text-2xl font-bold bg-white/70 px-6 py-2 rounded-full backdrop-blur-sm">
              For Mom
            </span>
          </Link>
          <Link
            href="/products?madeFor=baby"
            className="relative rounded-lg p-6 py-24 text-center flex flex-col items-center justify-center gap-4 transition-all hover:scale-[1.02] overflow-hidden hover:shadow-lg hover:brightness-105 active:brightness-90 active:scale-95 image-hover"
          >
            <Image
              src="/images/baby.png"
              alt="Baby products category"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="text-amber-900 relative z-10 text-2xl font-bold bg-white/70 px-6 py-2 rounded-full backdrop-blur-sm">
              For Baby
            </span>
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

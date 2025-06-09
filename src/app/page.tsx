import Image from "next/image";
import Link from "next/link";
import CustomCarousel from "@/components/CustomCarousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-28 pb-16">
      {/* <div className="group w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)] overflow-hidden mt-4"> */}
      <div className="group w-screen overflow-hidden">
        <CustomCarousel>
          {[
            <div key="slide-1" className="min-w-full">
              <div className="relative w-full h-[60vh] aspect-video overflow-hidden">
                {/* Image Background */}  
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/banners/b2bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'bottom right' }}
                    priority
                  />
                </div>

                {/* Overlay Text Content */}
                <div className="relative z-10 h-full w-full p-8 md:p-16">
                  <div className="w-full h-full flex flex-col justify-between">
                    <h1 className="text-3xl md:text-5xl font-bold text-white text-left px-20 font-[helvetica]">ECO FRIENDLY <br/> TEXTILE INNOVATION</h1>
                    <h1 className="text-3xl md:text-5xl font-bold text-primary text-right px-20 font-[helvetica]">SUSTAINABLE  <br/> SOLUTIONS</h1>
                    <Image src={'/icon.png'} height={100} width={300} alt="logo" className="mx-20"/>
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
                    alt="Background"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'bottom right' }}
                    priority
                  />
                </div>

                {/* Overlay Text Content */}
                <div className="relative z-10 h-full w-full p-8 md:p-16">
                  <div className="w-full h-full flex flex-col justify-end">
                    {/* <h1 className="text-3xl md:text-5xl font-bold text-white text-left">ECO FRIENDLY <br/> TEXTILE INNOVATION</h1>
                    <h1 className="text-3xl md:text-5xl font-bold text-black text-right">Sustainable  <br/> Solutions</h1> */}
                    <Image src={'/icon.png'} height={100} width={300} alt="logo"/>
                  </div>
                </div>
              </div>
            </div>
          ]}
        </CustomCarousel>
      </div>
      {/* For Baby / For Mom */}
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)] grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <Link
          href="/products?madeFor=mother"
          className="relative rounded-lg p-6 py-20 text-center flex flex-col items-center justify-center gap-4 transition-all hover:scale-[1.02] overflow-hidden hover:shadow-lg hover:brightness-105 active:brightness-90 active:scale-95"
        >
          <Image
            src="/images/mother.png"
            alt="Baby background"
            fill
            className="object-cover"
          />
          <span className="text-amber-900 relative z-10 text-xl font-bold">
            For Mom
          </span>
        </Link>
        <Link
          href="/products?madeFor=baby"
          className="relative rounded-lg p-6 py-20 text-center flex flex-col items-center justify-center gap-4 transition-all hover:scale-[1.02] overflow-hidden hover:shadow-lg hover:brightness-105 active:brightness-90 active:scale-95"
        >
          <Image
            src="/images/baby.png"
            alt="Baby background"
            fill
            className="object-cover"
          />
          <span className="text-amber-900 relative z-10 text-xl font-bold">
            For Baby
          </span>
        </Link>
      </div>

      {/* Company Information Panel */}
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)] mt-16 bg-gray-50 rounded-lg p-8 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Company</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/company.jpg"
                  alt="Balaji Hi-Tech Garment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
                Balaji Hi-Tech Garment is a leading manufacturer of reusable cloth diapers, period panty and reusable sanitary pads, offering sustainable solutions for daily hygiene. At Balaji Hi-Tech Garment, we focus on eco-friendly, technical textile products that combine comfort, durability, and environmental care.
              </p>
              <p className="text-gray-700 mb-4">
                Our reusable products help reduce the massive burden of non-biodegradable waste generated by single-use hygiene items, making a positive impact on the environment. With an in-house lab facility and strong emphasis on research and development, Balaji Hi-Tech Garment continuously innovates for better performance and sustainability.
              </p>
              <p className="text-gray-700">
                Trusted by clients for innovation and consistency, Balaji Hi-Tech Garment stands at the forefront of sustainable garment manufacturing in India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

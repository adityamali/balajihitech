import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardDescription,
  CardHeader,
  CardImage,
  CardPrice,
  CardTitle,
} from "@/components/ui/card";

import { categories, products } from "@/data/data";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 pb-16">
      <div className="group w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)] overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent className="rounded">
            <CarouselItem className="overflow-hidden">
              <div className="relative w-full aspect-[2.39/1]">
                <Image
                  src="/banners/bannerfix.png"
                  alt="banner"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* For Baby / For Mom */}
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)] grid grid-cols-2 gap-4 mt-8">
        <div className="bg-primary rounded-lg p-4 text-center">
          For Baby
          {/* <Image src="/images/baby.jpg" alt="1" width={100} height={100} className="object-cover h-12 w-12" /> */}
        </div>
        <div className="bg-secondary rounded-lg p-4 text-center">For Mom</div>
      </div>
      {/* Product Categories */}
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)] mt-8">
        <div className="flex flex-col justify-center">
          <h5 className="font-bold">Our Products</h5>
        </div>

        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 items-center justify-center gap-10 p-6">
          {categories.slice(0, 6).map((category) => (
            <div
              key={category.catID}
              className="bg-secondary rounded-full aspect-square h-32 w-32 p-6 text-center"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={100}
                height={100}
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Some Products */}
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)] mt-8">
        <div className="flex flex-col justify-center mb-6">
          <h5 className="font-bold">Some Products</h5>
        </div>
        <div className="grid lg:grid-cols-5 gap-4">
          {products.slice(0, 5).map((product) => (
            <Card key={product.id} className="w-full">
              <CardImage />
              <CardHeader>
                <CardTitle className="text-base">{product.title}</CardTitle>
                <CardPrice>Rs {product.price}/-</CardPrice>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

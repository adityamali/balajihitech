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

import { Cat } from "@/lib/samples/cat";
import { products } from "@/data/productData";

export const metadata = {
  title: "Contact Us | Balaji Hi Tech Garments",
  description: "Contact Us | Balaji Hi Tech Garments",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 pb-16">
      {/* Carousel */}
      <div className="group w-[calc(100vw-8rem)] overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent className="rounded">
            <CarouselItem className="overflow-hidden">
              <Image
                src="/images/banner.jpeg"
                alt="banner"
                width={1920}
                height={1080}
                className="object-cover w-full h-[600px] rounded-lg"
              />
            </CarouselItem>
            {/* <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem> */}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* For Baby / For Mom */}
      <div className=" w-[calc(100vw-8rem)] grid grid-cols-2 gap-4 mt-8">
        <div className="bg-primary rounded-lg p-4 text-center">
          For Baby
          {/* <Image src="/images/baby.jpg" alt="1" width={100} height={100} className="object-cover h-12 w-12" /> */}
        </div>
        <div className="bg-secondary rounded-lg p-4 text-center">For Mom</div>
      </div>
      {/* Product Categories */}
      <div className="w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] lg:w-[calc(100vw-8rem)]">
        <div className="flex flex-col justify-center">
          <h5>Our Products</h5>
        </div>

        <div className="flex items-center justify-center gap-10 p-6">
          {Cat.map((cat) => (
            <div
              key={cat.id}
              className="bg-secondary rounded-full aspect-square h-32 w-32 p-6 text-center"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={100}
                height={100}
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Some Products */}
      <div className="w-[calc(100vw-8rem)] mt-8">
        <div className="flex flex-col justify-center mb-6">
          <h5>Some Products</h5>
        </div>
        <div className="grid grid-cols-5 gap-4">
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

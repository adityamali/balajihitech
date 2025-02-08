import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

import { Cat } from "@/lib/samples/cat";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2 mt-24">

      {/* Carousel */}

      <div className="text-center w-[calc(100vw-8rem)]">
      <Carousel className="w-full px-8 h-96 rounded-lg">
        <CarouselContent className="rounded">
          <CarouselItem>
            <Image src="/images/banner.jpeg" alt="1" width={400} height={100} className="object-cover h-96 w-full rounded-lg" />
          </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
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
        <div className="bg-secondary rounded-lg p-4 text-center">
          For Mom
        </div>
      </div>

      {/* Product Categories */}

      <div className="w-[calc(100vw-8rem)] mt-8">
        <div className="flex flex-col justify-center">
          <h5>Our Products</h5>
        </div>

        <div className="flex items-center justify-center gap-10 p-6">
          {Cat.map((cat) => (
            <div key={cat.id} className="bg-secondary rounded-full aspect-square h-32 w-32 p-6 text-center">
              <Image src={cat.image} alt={cat.name} width={100} height={100} className="object-cover h-full w-full" />
            </div>
          ))}
        </div> 
      </div>

    </div>
  );
}


import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui//carousel";

export function CarouselSize() {
  return (
    <div className="relative w-full max-w-sm">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          active: true,
          duration: 50,
          dragFree: true,
          dragThreshold: 5,
          watchDrag: true,
        }}
        className="w-full"
      >

        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 shadow-md" />

        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 gap-5">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 shadow-md" />
      </Carousel>
    </div>
  );
}

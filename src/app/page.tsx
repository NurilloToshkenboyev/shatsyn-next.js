import { Component } from "@/components/new-chart/statistik-chart";
import MyForm from "@/components/forma/forma";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import caruselImg1 from "@/public/images/carusel.jpg";
import caruselImg2 from "@/public/images/carusel2.jpg";

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-8">

        <div className="flex justify-center">
          <Card className="p-6 max-w-lg w-full shadow-xl bg-gradient-to-r from-blue-500 to-blue-400">
            <div className="grid grid-cols-3 gap-4">
              <Button variant="default" className="hover:bg-blue-600">Default</Button>
              <Button variant="destructive" className="hover:bg-red-600">Destructive</Button>
              <Button variant="ghost" className="hover:bg-gray-200">Ghost</Button>
            </div>
          </Card>
        </div>
        <div className="mt-12">
          <Card className="max-w-4xl mx-auto p-6 shadow-lg bg-white rounded-lg">
            <Carousel>
              <CarouselContent className="space-y-4">
                <CarouselItem className="p-6 bg-gray-50 rounded-md shadow-sm">
                  <img src={caruselImg1.src} alt="Description of image 1" className="w-full h-auto rounded-md" />
                </CarouselItem>
                <CarouselItem className="p-6 bg-gray-50 rounded-md shadow-sm">
                  <img src={caruselImg2.src} alt="Description of image 2" className="w-full h-auto rounded-md" />
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-between items-center mt-4">
                <CarouselPrevious className="text-blue-500 hover:text-blue-700" />
                <CarouselNext className="text-blue-500 hover:text-blue-700" />
              </div>
            </Carousel>
          </Card>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-12 gap-10">
          <div className="w-full md:w-1/2">
            <Card className="p-5 bg-blue-50 rounded-lg shadow-md">
              <Component />
            </Card>
          </div>
          <div className="w-full md:w-1/2">
            <Card className="p-5 bg-gray-50 rounded-lg shadow-md">
              <MyForm />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

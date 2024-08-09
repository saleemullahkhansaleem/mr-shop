import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { LeftIcon, RightIcon } from "@/components/icons";

function HeroSection() {
  return (
    <section className="w-full">
      <div className="container space-y-8 xl:space-y-12">
        <Carousel className="w-full">
          <CarouselContent className="w-full">
            <CarouselItem>
              <img
                src="/banner.jpg"
                width={1200}
                height={400}
                alt="Image"
                className="aspect-[3/1] object-cover w-full rounded-md"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/placeholder.svg"
                width={1200}
                height={400}
                alt="Image"
                className="aspect-[3/1] object-cover w-full rounded-md"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/placeholder.svg"
                width={1200}
                height={400}
                alt="Image"
                className="aspect-[3/1] object-cover w-full rounded-md"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-background p-2 rounded-full shadow-sm">
            <LeftIcon className="h-5 w-5" />
          </CarouselPrevious>
          <CarouselNext className="bg-background p-2 rounded-full shadow-sm">
            <RightIcon className="h-5 w-5" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}

export default HeroSection;

import { Card, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { blogdata } from "@/data";

export const BlogCarousel = () => {
  return (
    <div>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Need some inspiration?
      </h2>

      <Card className="max-w-xs border-none">
        <div className="md:hidden">
          <Carousel className="bg-foreground">
            <CarouselContent>
              {blogdata.map((blog) => {
                return (
                  <CarouselItem
                    key={blog.id}
                    className="bg-foreground text-background"
                  >
                    <img
                      src={blog.img}
                      alt="Cover image"
                      className="max-w-full rounded-t-lg"
                    />
                   
                    <CardTitle className="font-mono text-sm font-medium my-1 text-background">{blog.category}</CardTitle>
                    <CardTitle>{blog.title}</CardTitle>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
          <div className="hidden md:grid md:grid-cols-2 gap-4">
            <img
              src="https://a.storyblok.com/f/127416/1107x603/2be93524b6/header_capture_memory.png"
              alt="Cover image"
              width={1250}
              height={340}
              className="aspect-video object-cover rounded-t-lg md:rounded-l-lg"
            />
            <div className="grid gap-4">
              <img
                src="https://a.storyblok.com/f/127416/1107x603/2be93524b6/header_capture_memory.png"
                alt="Cover image"
                width={1250}
                height={340}
                className="aspect-video object-cover rounded-t-lg md:rounded-r-lg"
              />
              <img
                src="https://a.storyblok.com/f/127416/1107x603/2be93524b6/header_capture_memory.png"
                alt="Cover image"
                width={1250}
                height={340}
                className="aspect-video object-cover rounded-t-lg md:rounded-r-lg"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

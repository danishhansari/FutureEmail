import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { blogdata } from "@/data";

export const BlogCarousel = () => {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Need some inspiration?
      </h2>

      <Card className="w-full max-w-md mx-auto border-none">
        <div className="grid gap-4">
          <div className="md:hidden">
            <Carousel className="w-full bg-foreground">
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
                        className="aspect-video object-cover rounded-t-lg"
                      />
                      <CardHeader>
                        <CardTitle>{blog.category}</CardTitle>
                        <CardTitle>{blog.title}</CardTitle>
                      </CardHeader>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
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

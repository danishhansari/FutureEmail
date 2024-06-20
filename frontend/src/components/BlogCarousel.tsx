import { Card, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { blogdata } from "@/data";

export const BlogCarousel = () => {
  return (
    <>
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

                    <CardTitle className="font-mono text-sm font-medium my-1 text-background">
                      {blog.category}
                    </CardTitle>
                    <CardTitle>{blog.title}</CardTitle>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </Card>
    </>
  );
};

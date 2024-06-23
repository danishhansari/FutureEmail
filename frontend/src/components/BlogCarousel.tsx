import { Card, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { blogdata } from "@/data";
import { Link } from "@tanstack/react-router";

export const BlogCarousel: React.FC = () => {
  return (
    <div className='max-w-4xl mx-auto px-2'>
      <h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        Need some inspiration?
      </h2>

      <Card className='border-none bg-foreground'>
        <div className='md:hidden'>
          <Carousel className='bg-foreground'>
            <CarouselContent>
              {blogdata.map((blog) => {
                return (
                  <CarouselItem
                    key={blog.id}
                    className='bg-foreground text-background'
                  >
                    <Link to={blog.link}>
                      <img
                        src={blog.img}
                        alt='Cover image'
                        className='max-w-full rounded-t-lg'
                      />

                      <CardTitle className='font-mono text-sm font-medium my-1 text-blue-500'>
                        {blog.category}
                      </CardTitle>
                      <CardTitle>{blog.title}</CardTitle>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        <div className='hidden md:grid grid-cols-2 max-w-4xl mx-auto py-4 gap-8 '>
          {blogdata.map((blog) => {
            return (
              <Link to={blog.link}>
                <Card className='bg-foreground border-none' key={blog.id}>
                  <img
                    src={blog.img}
                    alt='Cover image'
                    className='w-full rounded-t-lg'
                  />
                  <CardTitle className='font-mono text-sm font-semibold my-1 text-blue-600'>
                    {blog.category}
                  </CardTitle>
                  <CardTitle className='text-background'>
                    {blog.title}
                  </CardTitle>
                </Card>
              </Link>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

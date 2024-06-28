import { Hero } from "@/components/Hero";
import { Inspiration } from "@/components/Inspiration";
import { Toaster } from "@/components/ui/toaster";

const Home = () => {
  return (
    <>
      <Toaster />
      <Hero />
      <Inspiration />
    </>
  );
};

export default Home;

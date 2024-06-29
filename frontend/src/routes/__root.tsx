import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

interface MyRouteContext {
  queryClient: QueryClient;
}

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const Route = createRootRouteWithContext<MyRouteContext>()({
  component: Root,
});

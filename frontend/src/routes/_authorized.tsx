import { userQueryOptions } from "@/lib/api";
import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";

const Component = () => {
  const navigate = useNavigate();
  const { user } = Route.useRouteContext();

  if (!user) {
    navigate({ to: "/auth", replace: true });
    return null;
  }
  return <Outlet />;
};

export const Route = createFileRoute("/_authorized")({
  beforeLoad: async ({ context }) => {
    const queryClient = context.queryClient;
    try {
      const data = await queryClient.fetchQuery(userQueryOptions);
      console.log("I am from", data);
      return { user: data };
    } catch (error) {
      return { user: null };
    }
  },
  component: Component,
});

import { userQueryOptions } from "@/lib/api";
import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";

const Component = () => {
  const navigate = useNavigate();
  const { user } = Route.useRouteContext();

  if (!user) {
    return navigate({ to: "/auth", replace: true });
  }
  return <Outlet />;
};

export const Route = createFileRoute("/_authorized")({
  beforeLoad: async ({ context }) => {
    console.log(context);
    const queryClient = context.queryClient;
    try {
      const data = await queryClient.fetchQuery(userQueryOptions);
      return data;
    } catch (error) {
      return { user: null };
    }
  },
  component: Component,
});

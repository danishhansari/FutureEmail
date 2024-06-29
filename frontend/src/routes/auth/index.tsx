import { userQueryOptions } from "@/lib/api";
import { Auth } from "@/pages/Auth";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

const Component = () => {
  const navigate = useNavigate();
  const { user } = Route.useRouteContext();

  if (!user) {
    return <Auth />;
  }
  navigate({ to: "/", replace: true });
  return { user: null };
};

export const Route = createFileRoute("/auth/")({
  beforeLoad: async ({ context }) => {
    const queryClient = context.queryClient;
    try {
      const data = await queryClient.fetchQuery(userQueryOptions);
      return { user: data };
    } catch (error) {
      return { user: null };
    }
  },
  component: Component,
});

import { Auth } from "@/pages/Auth";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/auth/")({
  component: Auth,
});

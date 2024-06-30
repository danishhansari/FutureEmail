import { Auth } from "@/pages/Auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/")({
  component: Auth,
});

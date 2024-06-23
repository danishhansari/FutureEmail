import Signin from "@/pages/Signin";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signin/")({
  component: Signin,
});

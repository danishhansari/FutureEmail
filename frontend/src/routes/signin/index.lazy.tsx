import Signin from "@/pages/Signin";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/signin/")({
  component: Signin,
});

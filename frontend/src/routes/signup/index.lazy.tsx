import Signup from "@/pages/Signup";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/signup/")({
  component: Signup,
});

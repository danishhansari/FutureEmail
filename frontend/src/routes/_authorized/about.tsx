import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authorized/about")({
  component: () => <div>Hello world</div>,
});

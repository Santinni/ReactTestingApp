import Characters from "@/pages/Characters";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/characters/")({
  component: () => <Characters />,
});

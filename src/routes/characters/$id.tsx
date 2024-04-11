import CharacterDetail from "@/pages/CharacterDetail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/characters/$id")({
  component: CharacterDetailComponent,
});

function CharacterDetailComponent() {
  const { id } = Route.useParams();

  return <CharacterDetail characterId={id} />;
}

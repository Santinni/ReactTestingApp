import { FC } from "react";

import useGetCharacter from "@/hooks/useGetCharacter";
import { Character } from "@/types/character";

interface CharacterDetailProps {
  characterId: string;
}

const CharacterDetail: FC<CharacterDetailProps> = ({ characterId }) => {
  const { data, isLoading, error } = useGetCharacter(Number(characterId));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data found</div>;

  const character: Character = data.data;

  return (
    <div className="card">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Species:</strong> {character.species}
        </p>
        <p className="card-text">
          <strong>Type:</strong> {character.type}
        </p>
        <p className="card-text">
          <strong>Location:</strong> {character.location.name}
        </p>
        <div className="card-text">
          <strong>Episodes:</strong>
          <ul>
            {character.episode.map((episode) => (
              <li key={episode}>{episode}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;

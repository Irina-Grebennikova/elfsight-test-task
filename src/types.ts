type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type CharacterResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
};

enum CharacterGender {
  female = 'Female',
  male = 'Male',
  genderless = 'Genderless',
  unknown = 'unknown',
}

enum CharacterStatus {
  alive = 'Alive',
  dead = 'Dead',
  unknown = 'unknown',
}

export type { Character, CharacterResponse };
export { CharacterGender, CharacterStatus };

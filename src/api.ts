import { Character, CharacterResponse } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api';

const rickAndMortyApi = {
  async getCharacters(query = ''): Promise<CharacterResponse | null> {
    try {
      const response = await fetch(`${BASE_URL}/character/?${query}`);
      return (await response.json()) as CharacterResponse;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  async getCharacter(id: number): Promise<Character | null> {
    try {
      const response = await fetch(`${BASE_URL}/character/${id}`);
      return (await response.json()) as Character;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export { rickAndMortyApi };

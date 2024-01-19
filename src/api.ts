import { Character, CharacterResponse } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api';

const rickAndMortyApi = {
  async getCharacters(query = '', page = 1): Promise<CharacterResponse | null> {
    query = query ? `&${query}` : '';

    try {
      const response = await fetch(`${BASE_URL}/character/?page=${page}${query}`);
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

import { type JSX, useEffect, useState } from 'react';
import styled from 'styled-components';

import { rickAndMortyApi } from '@/api';
import logo from '@/assets/icons/logo.png';
import { CharacterList } from '@/components/character-list';
import { CharacterPopup } from '@/components/character-popup';
import { Search } from '@/components/search';
import { Character } from '@/types';

const Logo = styled.img`
  width: 250px;
`;

const Wrapper = styled.div`
  text-align: center;
  padding: 1.5% 15px 15px;
`;

const MainPage = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(() => true);

      const response = await rickAndMortyApi.getCharacters();
      setCharacters(response?.results ?? []);

      setIsLoading(() => false);
    };
    void fetchData();
  }, []);

  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CharacterList
        isLoading={isLoading}
        characters={characters}
        selectCharacter={(character: Character) => setSelectedCharacter(character)}
      />
      <CharacterPopup character={selectedCharacter} />
    </Wrapper>
  );
};

export { MainPage };

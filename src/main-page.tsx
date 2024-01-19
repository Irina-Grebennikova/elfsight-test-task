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
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(() => true);

      const response = await rickAndMortyApi.getCharacters(searchQuery.trim());
      setCharacters(response?.results ?? []);

      setIsLoading(() => false);
    };

    void fetchData();
  }, [searchQuery]);

  const showPopup = (character: Character): void => {
    setSelectedCharacter(character);
    setIsPopupOpen(true);
  };

  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <Search setSearchQuery={(query: string) => setSearchQuery(query)} />
      <CharacterList isLoading={isLoading} characters={characters} showPopup={showPopup} />
      <CharacterPopup character={selectedCharacter} isOpen={isPopupOpen} close={() => setIsPopupOpen(false)} />
    </Wrapper>
  );
};

export { MainPage };

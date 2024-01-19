import { type JSX, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { rickAndMortyApi } from '@/api';
import logo from '@/assets/icons/logo.png';
import { CharacterList } from '@/components/character-list';
import { CharacterPopup } from '@/components/character-popup';
import { Filters } from '@/components/filters';
import { Search } from '@/components/search';
import { Character } from '@/types';

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: stretch;
  justify-content: flex-end;
`;

const Main = styled.main`
  text-align: center;
  padding: 1.5% 15px 15px;

  .logo {
    width: 250px;
  }
`;

const MainPage = (): JSX.Element => {
  const [searchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(() => true);

      const response = await rickAndMortyApi.getCharacters(searchParams.toString());
      setCharacters(response?.results ?? []);

      setIsLoading(() => false);
    };

    void fetchData();
  }, [searchParams]);

  const showPopup = (character: Character): void => {
    setSelectedCharacter(character);
    setIsPopupOpen(true);
  };

  return (
    <Wrapper>
      <Main>
        <img src={logo} alt="logo" className="logo" />
        <Search />
        <CharacterList isLoading={isLoading} characters={characters} showPopup={showPopup} />
        <CharacterPopup character={selectedCharacter} isOpen={isPopupOpen} close={() => setIsPopupOpen(false)} />
      </Main>
      <Filters />
    </Wrapper>
  );
};

export { MainPage };

import { type JSX, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { rickAndMortyApi } from '@/api';
import logo from '@/assets/icons/logo.png';
import { CharacterList } from '@/components/character-list';
import { CharacterPopup } from '@/components/character-popup';
import { Filters } from '@/components/filters';
import { Search } from '@/components/search';
import { Pagination } from '@/components/ui/pagination';
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

const ITEMS_PER_PAGE = 20;

const MainPage = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(() => true);

      const response = await rickAndMortyApi.getCharacters(searchParams.toString());
      const totalCount = response?.info?.count || 0;

      setCharacters(response?.results ?? []);
      setPageCount(Math.ceil(totalCount / ITEMS_PER_PAGE));
      setIsLoading(() => false);
    };

    void fetchData();
  }, [searchParams]);

  const showPopup = (character: Character): void => {
    setSelectedCharacter(character);
    setIsPopupOpen(true);
  };

  const setPage = (page: number): void => {
    searchParams.set('page', String(page));
    setSearchParams(searchParams);
  };

  return (
    <Wrapper>
      <Main>
        <img src={logo} alt="logo" className="logo" />
        <Search />
        <CharacterList isLoading={isLoading} characters={characters} showPopup={showPopup} />
        {!isLoading && characters.length > 0 && (
          <Pagination currentPage={Number(searchParams.get('page') ?? 1)} pageCount={pageCount} setPage={setPage} />
        )}
        <CharacterPopup character={selectedCharacter} isOpen={isPopupOpen} close={() => setIsPopupOpen(false)} />
      </Main>
      <Filters />
    </Wrapper>
  );
};

export { MainPage };

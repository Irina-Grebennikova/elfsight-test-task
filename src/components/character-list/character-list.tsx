import { type JSX } from 'react';
import styled from 'styled-components';

import notFoundIcon from '@/assets/icons/nothing-found.png';
import { ThemeDefault } from '@/styles';
import { Character } from '@/types';

import { CharacterCard } from '../character-card';
import { Loader } from '../ui';

type Props = {
  isLoading: boolean;
  characters: Character[];
  selectCharacter: (character: Character) => void;
};

const StyledNoResults = styled.div<{ theme: ThemeDefault }>`
  display: flex;
  gap: clamp(5px, 1vw, 10px);
  justify-content: center;
  margin-top: 5%;
  font-family: ${({ theme }): string => theme.fonts.neucha};
  color: ${({ theme }): string => theme.colors.grey};
  font-size: clamp(20px, 4vw, 30px);
`;

const StyledList = styled.div`
  display: flex;
  gap: 2vw;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5vh auto 0;
  max-width: 1500px;
`;

const CharacterList = ({ isLoading, characters, selectCharacter }: Props): JSX.Element => {
  if (isLoading) {
    return <Loader mt={'5%'} />;
  }

  if (characters.length === 0) {
    return (
      <StyledNoResults>
        No results found
        <img src={notFoundIcon} alt="" />
      </StyledNoResults>
    );
  }

  return (
    <StyledList>
      {characters.map((character: Character) => {
        return <CharacterCard key={character.id} character={character} selectCharacter={selectCharacter} />;
      })}
    </StyledList>
  );
};
export { CharacterList };

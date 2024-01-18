import { createRef } from 'react';

import magnifier from '@/assets/icons/magnifier.svg';
import { StyledButton } from '@/styles';

import { StyledClearIcon, StyledInput, StyledInputBox, StyledSearchIcon, StyledWrapper } from './search-styles';

type Props = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ searchQuery, setSearchQuery }: Props): JSX.Element => {
  const input = createRef<HTMLInputElement>();

  function updateSearchQuery(): string {
    const newQuery = input.current!.value;
    setSearchQuery(newQuery);
    return newQuery;
  }

  const handleClearBtnClick = (): void => {
    setSearchQuery('');
  };

  return (
    <StyledWrapper>
      <StyledInputBox>
        <StyledSearchIcon src={magnifier} alt="Search" />
        <StyledInput
          placeholder="Search for characters..."
          value={searchQuery}
          onChange={updateSearchQuery}
          ref={input}
          autoFocus
        />
        <StyledClearIcon onClick={handleClearBtnClick} />
      </StyledInputBox>
      <StyledButton>Search</StyledButton>
    </StyledWrapper>
  );
};

export { Search };

import { FormEvent, useState } from 'react';

import magnifier from '@/assets/icons/magnifier.svg';
import { StyledButton } from '@/styles';

import { StyledClearIcon, StyledInput, StyledInputBox, StyledSearchIcon, StyledWrapper } from './search-styles';

type Props = {
  setSearchQuery: (query: string) => void;
};

const Search = ({ setSearchQuery }: Props): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleClearBtnClick = (): void => {
    setSearchQuery('');
    setInputValue('');
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledWrapper>
        <StyledInputBox>
          <StyledSearchIcon src={magnifier} alt="Search" />
          <StyledInput
            placeholder="Search for characters..."
            value={inputValue}
            onChange={(e): void => setInputValue(e.target.value)}
            autoFocus
          />
          <StyledClearIcon onClick={handleClearBtnClick} />
        </StyledInputBox>
        <StyledButton>Search</StyledButton>
      </StyledWrapper>
    </form>
  );
};

export { Search };

import { FormEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import magnifier from '@/assets/icons/magnifier.svg';
import { StyledButton, StyledCloseItem } from '@/styles';

import { StyledClearIcon, StyledInput, StyledInputBox, StyledSearchIcon, StyledWrapper } from './search-styles';

const Search = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const removeNameParam = (): void => {
    searchParams.delete('name');
    setSearchParams(searchParams);
  };

  const handleClearBtnClick = (): void => {
    setInputValue('');
    removeNameParam();
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      removeNameParam();
      return;
    }
    searchParams.set('page', '1');
    searchParams.set('name', inputValue.trim());
    setSearchParams(searchParams);
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
          <StyledClearIcon onClick={handleClearBtnClick}>
            <StyledCloseItem />
          </StyledClearIcon>
        </StyledInputBox>
        <StyledButton>Search</StyledButton>
      </StyledWrapper>
    </form>
  );
};

export { Search };

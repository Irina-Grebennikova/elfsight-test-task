import { type JSX, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { StyledButton, StyledCloseItem, StyledFilterName } from '@/styles';
import { CharacterGender, CharacterStatus } from '@/types';

import { FilterVariants } from '../filter-variants';
import { StyledFilters } from './filters-styles';

const CharacterSpecies = [
  'Human',
  'Alien',
  'Humanoid',
  'Poopybutthole',
  'Mythological',
  'Robot',
  'Animal',
  'Disease',
  'Unknown',
  'Cronenberg',
];

const minWidth750 = window.matchMedia('(min-width: 750px)');

const Filters = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isOpen, setIsOpen] = useState(minWidth750.matches);
  const [type, setType] = useState(searchParams.get('type') ?? '');

  const toggleOpen = (): void => setIsOpen((isOpen) => !isOpen);

  const setActiveVariant = (name: string, value: string): void => {
    searchParams.set('page', '1');
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  const clearFilters = (): void => {
    setSearchParams({});
    setType('');
  };

  return (
    <StyledFilters isOpen={isOpen}>
      <section className="content">
        <h3 className="title">Filters</h3>
        <div className="close-small-screens" aria-label={'close filters'}>
          <StyledCloseItem onClick={toggleOpen} size={'26px'} />
        </div>

        <FilterVariants
          label="status"
          activeVariant={searchParams.get('status') ?? ''}
          variants={Object.values(CharacterStatus)}
          setActiveVariant={setActiveVariant}
        />
        <FilterVariants
          label="gender"
          activeVariant={searchParams.get('gender') ?? ''}
          variants={Object.values(CharacterGender)}
          setActiveVariant={setActiveVariant}
        />
        <FilterVariants
          label="species"
          activeVariant={searchParams.get('species') ?? ''}
          variants={Object.values(CharacterSpecies)}
          setActiveVariant={setActiveVariant}
        />

        <StyledFilterName>Type</StyledFilterName>
        <input
          className="type-input"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Enter type..."
        />

        <div className="buttons-wrapper">
          <StyledButton onClick={() => setActiveVariant('type', type)}>Apply type</StyledButton>
          <button aria-label="clear filters" onClick={clearFilters} className="clear-btn">
            Clear filters
          </button>
        </div>
      </section>

      <button className="closeItem" onClick={toggleOpen}>
        <span className="closeIcon"></span>
      </button>
    </StyledFilters>
  );
};

export { Filters };

import { type JSX } from 'react';
import styled, { css } from 'styled-components';

import { StyledFilterName, ThemeDefault } from '@/styles';

const StyledFilterVariants = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  padding: 5%;
  border-radius: 5px;
  box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, 0.3);
`;

const StyledVariant = styled.div<{ theme: ThemeDefault; isActive: boolean }>(({ theme, isActive }) => {
  const { white, blue } = theme.colors;
  return css`
    padding: 2.5% 5%;
    border-radius: 5px;
    border: 2px solid ${blue};
    color: ${blue};
    font-size: 1.1rem;
    font-weight: 700;
    transition: 0.3s;
    cursor: pointer;

    ${isActive &&
    css`
      background-color: ${blue};
      color: ${white};
    `}

    @media (hover: hover) {
      &:hover {
        background-color: ${blue};
        color: ${white};
      }
    }
  `;
});

type Props = {
  label: string;
  variants: string[];
  activeVariant: string;
  setActiveVariant: (name: string, value: string) => void;
};

const FilterVariants = ({ label, variants, activeVariant, setActiveVariant }: Props): JSX.Element => {
  return (
    <>
      <StyledFilterName>{label}</StyledFilterName>
      <StyledFilterVariants>
        {variants.map((variant) => (
          <StyledVariant
            key={variant}
            isActive={variant.toLowerCase() === activeVariant.toLowerCase()}
            onClick={() => setActiveVariant(label, variant)}
          >
            {variant}
          </StyledVariant>
        ))}
      </StyledFilterVariants>
    </>
  );
};

export { FilterVariants };

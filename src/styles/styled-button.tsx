import styled, { css } from 'styled-components';

import { type ThemeDefault } from './theme';

const StyledButton = styled.button<{ theme: ThemeDefault }>(({ theme }) => {
  const { white, lightBlue, blue } = theme.colors;

  return css`
    padding: clamp(5px, 1vw, 10px) clamp(10px, 3vw, 25px);
    font-size: clamp(16px, 4vw, 20px);
    font-family: $neuchaFont;
    color: ${white};
    border-radius: 10px;
    border: 3px solid ${lightBlue};
    box-shadow: inset 0 0 5px 1px ${lightBlue};
    background-color: ${blue};
    transform: 0.2s;

    &:hover {
      background-color: ${lightBlue};
      color: ${blue};
    }

    &:active {
      border-color: ${blue};
      box-shadow: inset 0 0 5px 0px ${blue};
    }
  `;
});

export { StyledButton };

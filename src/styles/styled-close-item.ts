import styled, { css } from 'styled-components';

import { ThemeDefault } from './theme';

const StyledCloseItem = styled.div<{ theme: ThemeDefault; size?: string }>(({ theme, size }) => {
  size = size ? size : '20px';

  return css`
    width: ${size};
    height: ${size};
    opacity: 0.2;
    cursor: pointer;
    transition: 0.2s;

    @media (hover: hover) {
      &:hover {
        opacity: 1;
      }
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: ${parseFloat(size) / 2}px;
      display: block;
      width: ${size};
      height: ${parseFloat(size) / 10}px;
      background: ${theme.colors.black};
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  `;
});
export { StyledCloseItem };

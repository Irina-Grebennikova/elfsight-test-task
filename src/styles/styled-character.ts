import styled from 'styled-components';

import { ThemeDefault } from './theme';

type Props = {
  color: keyof ThemeDefault['colors'];
  theme: ThemeDefault;
};

const StyledGender = styled.span<Props>`
  color: ${({ theme, color }): string => theme.colors[color]};
  font-size: '2rem';
  font-weight: 900;
`;

const StyledStatus = styled.span<Props>`
  position: absolute;
  top: 3%;
  right: 3%;
  padding: 5px 10px;
  border-radius: 5px;
  background: ${({ theme, color }): string => theme.colors[color]};
  color: ${({ theme }): string => theme.colors.white};
  font-size: 1.3rem;
`;

export { StyledGender, StyledStatus };

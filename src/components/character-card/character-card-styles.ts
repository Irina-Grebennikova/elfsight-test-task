import styled from 'styled-components';

import { ThemeDefault } from '@/styles';

const StyledCard = styled.section<{ theme: ThemeDefault }>`
  position: relative;
  border: 3px solid ${({ theme }): string => theme.colors.blue};
  border-radius: 10px;
  transition: 0.4s;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }

  .image {
    border-radius: 10px 10px 0 0;
    max-width: 300px;
    object-fit: cover;
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: clamp(5px, 1vw, 10px);
  }

  .name {
    font-size: 20px;
    font-weight: 700;
    font-family: ${({ theme }): string => theme.fonts.neucha};
    color: ${({ theme }): string => theme.colors.black};
  }
`;

const StyledGender = styled.span<{ theme: ThemeDefault; color: keyof ThemeDefault['colors'] }>`
  color: ${({ theme, color }): string => theme.colors[color]};
  font-size: 28px;
  font-weight: 900;
`;

const StyledStatus = styled.span<{ theme: ThemeDefault; color: keyof ThemeDefault['colors'] }>`
  position: absolute;
  top: 3%;
  right: 3%;
  padding: 5px 10px;
  border-radius: 5px;
  background: ${({ theme, color }): string => theme.colors[color]};
  color: ${({ theme }): string => theme.colors.white};
  font-size: 1.3rem;
`;

export { StyledCard, StyledGender, StyledStatus };

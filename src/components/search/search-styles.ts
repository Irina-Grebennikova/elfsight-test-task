import styled from 'styled-components';

import { type ThemeDefault } from '@/styles';

const StyledWrapper = styled.div<{ theme: ThemeDefault }>`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 5px;
  justify-content: center;
  margin-top: 5vh;
  font-family: ${({ theme }): string => theme.fonts.neucha};
`;

const StyledInputBox = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledInput = styled.input<{ theme: ThemeDefault }>`
  width: clamp(200px, 48vw, 700px);
  padding: clamp(5px, 1vw, 10px) clamp(40px, 3vw, 45px);
  border-radius: 10px;
  border: 2px solid ${({ theme }): string => theme.colors.blue};
  font-size: clamp(16px, 4vw, 20px);

  @media (max-width: 550px) {
    padding: clamp(5px, 1vw, 10px) clamp(30px, 3vw, 45px);
  }
`;

const StyledSearchIcon = styled.img<{ theme: ThemeDefault }>`
  position: absolute;
  left: 15px;
  top: calc(50% - 10px);
  height: 20px;
  color: ${({ theme }): string => theme.colors.grey};

  @media (max-width: 550px) {
    top: calc(50% - 9px);
    left: 10px;
    height: 16px;
  }
`;

const StyledClearIcon = styled.div<{ theme: ThemeDefault }>`
  position: absolute;
  top: calc(50% - 12px);
  right: 15px;
  width: 20px;
  height: 20px;
  opacity: 0.2;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    display: block;
    width: 20px;
    height: 2px;
    background: ${({ theme }): string => theme.colors.black};
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media (max-width: 550px) {
    right: 10px;
    width: 16px;
    height: 16px;

    &::before,
    &::after {
      content: '';
      width: 16px;
      height: 1.5px;
    }
  }
`;

export { StyledWrapper, StyledInputBox, StyledInput, StyledSearchIcon, StyledClearIcon };

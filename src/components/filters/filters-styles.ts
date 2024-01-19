import styled, { css } from 'styled-components';

import { ThemeDefault } from '@/styles';

const StyledFilters = styled.aside<{ theme: ThemeDefault; isOpen: boolean }>(({ theme, isOpen }) => {
  const { white, lightGrey, grey, darkBlue, blue } = theme.colors;

  return css`
    min-width: ${isOpen ? 'clamp(310px, 30vw, 400px)' : '0'};
    width: ${isOpen ? 'clamp(310px, 30vw, 400px)' : '0'};
    border-left: 1px solid ${lightGrey};
    background-color: ${white};
    box-shadow: 0 -7px 20px -10px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    transition: 0.8s;

    @media (max-width: 750px) {
      position: fixed;
      height: 100%;
      overflow-y: scroll;
    }

    @media (max-width: 550px) {
      min-width: ${isOpen ? '100%' : '0'};
      width: ${isOpen ? '100%' : '0'};
    }

    .content {
      position: relative;
      z-index: 1;
      padding: 3% 5% 0;
      background-color: ${white};
      height: 100%;
    }

    .title {
      margin-bottom: 5%;
      text-align: center;
      font-size: 2.5rem;
      color: ${darkBlue};
      font-family: ${theme.fonts.neucha};
    }

    .type-input {
      width: 100%;
      padding: 2.5% 5%;
      border-radius: 10px;
      border: 2px solid ${blue};
      font-family: ${theme.fonts.neucha};
      font-size: clamp(16px, 3vw, 18px);

      @media (max-width: 550px) {
        padding: clamp(5px, 1vw, 10px) clamp(30px, 3vw, 45px);
      }
    }

    .buttons-wrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      margin-top: 5%;
      padding-bottom: 5%;
    }

    .clear-btn {
      color: ${darkBlue};
      font-size: 1.2rem;
      background: none;
      cursor: pointer;
      transition: 0.2s;

      @media (hover: hover) {
        &:hover {
          color: ${grey};
        }
      }
    }

    .closeItem {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: calc(50% - 25px);
      right: ${isOpen ? 'clamp(307px, 30vw - 3px, 397px)' : '-3px'};
      width: 28px;
      height: 50px;
      border-radius: 7px 0 0 7px;
      border: 1px solid ${lightGrey};
      border-right: none;
      background-color: transparent;
      box-shadow: 0 0px 8px 0px rgba(0, 0, 0, 0.2);
      transition:
        transform 0.2s,
        right 0.8s;
      cursor: pointer;

      @media (hover: hover) {
        &:hover {
          transform: translateX(${isOpen ? '3px' : '-3px'});
        }
      }

      @media (max-width: 550px) {
        opacity: ${isOpen ? '0' : '1'};
      }
    }

    .closeIcon {
      border: 5px solid transparent;
      ${isOpen
        ? `border-left: 5px solid ${grey};
           margin-left: 5px;`
        : `border-right: 5px solid ${grey};
           margin-right: 5px;`};
    }

    .close-small-screens {
      display: none;
      position: absolute;
      top: 3%;
      right: 5%;

      @media (max-width: 550px) {
        display: block;
      }
    }
  `;
});

export { StyledFilters };

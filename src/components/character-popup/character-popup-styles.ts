import styled, { css } from 'styled-components';

import { type ThemeDefault } from '@/styles';

const StyledMask = styled.div<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    transition: opacity 1s;
  `
);

const StyledPopup = styled.article<{ theme: ThemeDefault }>(
  ({ theme: { colors, fonts } }) => css`
    position: relative;
    z-index: 2;
    max-width: 300px;
    border: 3px solid ${colors.blue};
    border-radius: 10px;
    background-color: ${colors.white};
    transition: 0.5s;

    .image {
      border-radius: 10px 10px 0 0;
      max-width: 100%;
      height: 250px;
      object-fit: cover;
      object-position: 0% 0%;
    }

    .description {
      padding: clamp(5px, 1vw, 10px);
      text-align: left;
    }

    .info-line {
      font-family: Roboto;
      font-size: 18px;
      font-weight: 700;
      color: ${colors.darkBlue};
      margin-bottom: 10px;
    }

    .value {
      font-size: 18px;
      font-weight: 400;
      font-family: ${fonts.neucha};
      color: ${colors.black};
    }

    .close-btn {
      position: absolute;
      left: auto;
      top: -15px;
      right: -30px;
      width: 35px;
      height: 35px;
      background-color: transparent;
      cursor: pointer;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 4px;
        border-radius: 3px;
        background-color: ${colors.blue};
        transition: 0.2s;
      }
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
      @media (hover: hover) {
        &:hover {
          &::before,
          &::after {
            background-color: ${colors.darkBlue};
          }
        }
      }
      @media (max-width: 360px) {
        top: -25px;
        right: -10px;
      }
    }
  `
);

export { StyledMask, StyledPopup };

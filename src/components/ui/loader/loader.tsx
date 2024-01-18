import { type JSX } from 'react';
import styled from 'styled-components';

import { ThemeDefault } from '@/styles';

type StyledSpinnerProps = {
  theme: ThemeDefault;
  marginTop: string;
};

const StyledSpinner = styled.div<StyledSpinnerProps>`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-top: ${({ marginTop }): string => marginTop};

  & div {
    position: absolute;
    border: 4px solid ${({ theme }): string => theme.colors.blue};
    opacity: 1;
    border-radius: 50%;
    animation: anim 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }

  @keyframes anim {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

const Loader = ({ mt = '0' }): JSX.Element => {
  return (
    <StyledSpinner marginTop={mt}>
      <div></div>
      <div></div>
    </StyledSpinner>
  );
};

export { Loader };

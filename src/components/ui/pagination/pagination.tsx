import { type JSX } from 'react';
import styled, { css } from 'styled-components';

import { ThemeDefault } from '@/styles';

const StyledPagination = styled.div`
  display: flex;
  gap: clamp(10px, 2vw, 20px);
  justify-content: center;
  margin-top: clamp(20px, 3%, 30px);
`;

const StyledPaginationBtn = styled.div<{ theme: ThemeDefault; isInactive?: boolean; isCurrent?: boolean }>(
  ({ theme, isInactive, isCurrent }) => {
    const { lightGrey, blue } = theme.colors;

    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 52px;
      height: 52px;
      border: 2px solid ${blue};
      border-radius: 100px;
      background-color: transparent;
      color: inherit;
      font-size: 20px;
      line-height: 115%;
      letter-spacing: 0.06em;
      cursor: pointer;
      transition: all 0.2s;

      &:active {
        transform: scale(0.9);
      }

      ${isCurrent &&
      css`
        pointer-events: none;
        background-color: ${blue};
      `}

      ${isInactive &&
      css`
        pointer-events: none;
        color: ${lightGrey};
        border-color: ${lightGrey};
      `}

      @media (hover: hover) {
        &:hover {
          background: ${blue};
          border-color: ${blue};
        }
      }
    `;
  }
);

type PaginationProps = {
  currentPage: number;
  pageCount: number;
  setPage: (page: number) => void;
};

function Pagination(props: PaginationProps): JSX.Element {
  const { currentPage, pageCount, setPage } = props;

  const isFirstPage = (): boolean => currentPage === 1;
  const isLastPage = (): boolean => currentPage === pageCount;

  return (
    <StyledPagination>
      <StyledPaginationBtn isInactive={isFirstPage()} onClick={() => setPage(1)}>
        {'<<'}
      </StyledPaginationBtn>
      <StyledPaginationBtn isInactive={isFirstPage()} onClick={() => setPage(currentPage - 1)}>
        {'<'}
      </StyledPaginationBtn>
      <StyledPaginationBtn isCurrent>{currentPage}</StyledPaginationBtn>
      <StyledPaginationBtn isInactive={isLastPage()} onClick={() => setPage(currentPage + 1)}>
        {'>'}
      </StyledPaginationBtn>
      <StyledPaginationBtn isInactive={isLastPage()} onClick={() => setPage(pageCount)}>
        {'>>'}
      </StyledPaginationBtn>
    </StyledPagination>
  );
}

export { Pagination };

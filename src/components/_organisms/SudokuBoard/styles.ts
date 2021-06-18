import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* column-gap: 5px;
  row-gap: 5px; */
  border: 1px solid #686868;
`;

export const SubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* column-gap: 5px;
  row-gap: 5px; */
  /* border: 1px solid #686868; */

  /* &:nth-child(3n - 2) {
    border-left: 1px solid black;
  } */

  &:nth-child(3n - 2) {
    border-right: 1px solid #686868;
  }

  &:nth-child(3n - 1) {
    border-right: 1px solid #686868;
  }

  &:not(:nth-child(1), :nth-child(2), :nth-child(3)) {
    border-top: 1px solid #686868;
  }
`;

interface SquareContainerProps {}

export const SquareContainer = styled.div<SquareContainerProps>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #cecece; */
  cursor: pointer;
  user-select: none;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  transition: 0.15s all ease-in-out;

  &:nth-child(3n - 2) {
    border-right: 1px solid #cecece;
  }

  &:nth-child(3n - 1) {
    border-right: 1px solid #cecece;
  }

  &:not(:nth-child(1), :nth-child(2), :nth-child(3)) {
    border-top: 1px solid #cecece;
  }

  &:hover {
    font-size: 22px;
  }
`;

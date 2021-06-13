import styled from 'styled-components';

export const Container = styled.button`
  background-color: #cecece;
  font-size: 19px;
  padding: 10px;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 2px #686868);
  transition: 0.15s all ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0px 0px 3px #686868);
  }
`;

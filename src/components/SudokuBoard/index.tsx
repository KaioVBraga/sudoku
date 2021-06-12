import { useState, useCallback } from "react";
import { Container, SubContainer, SquareContainer } from "./styles";

const SudokuBoard = () => {
  const subContainers = Array(9)
    .fill(null)
    .map((v: null, index) => index);
  const lineContainer = Array(3)
    .fill(null)
    .map((v: null, index) => index);
  const [boardElements, setBoardElements] = useState(
    Array(81)
      .fill(null)
      .map((v: null, index) => ({
        value: index + 1,
        display: true,
      }))
  );

  const handleToggle = useCallback(
    (index) => {
      const newBoardElements = [...boardElements];

      const { display } = newBoardElements[index];
      newBoardElements[index] = {
        ...newBoardElements[index],
        display: !display,
      };

      setBoardElements(newBoardElements);
    },
    [boardElements]
  );

  return (
    <Container>
      {subContainers.map((sub) => {
        const line = 3 * (sub % 3) + Math.floor(sub / 3) * 27;

        return (
          <SubContainer>
            {lineContainer.map((v) => {
              const start = (v % 3) * 9 + line;
              const end = (v % 3) * 9 + line + 3;

              return boardElements
                .slice(start, end)
                .map(({ value, display }, index) => (
                  <SquareContainer onClick={() => handleToggle(start + index)}>
                    {display ? value : null}
                  </SquareContainer>
                ));
            })}
          </SubContainer>
        );
      })}
    </Container>
  );
};

export default SudokuBoard;

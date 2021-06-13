//@ts-ignore
//@ts-nocheck
import { useState, useEffect, useCallback } from 'react';
import { Container, SubContainer, SquareContainer } from './styles';

interface SudokuSquare {
  value: number;
  display: boolean;
}

const SudokuBoard = () => {
  const subContainers = Array(9)
    .fill(null)
    .map((v: null, index) => index);

  const lineContainer = Array(3)
    .fill(null)
    .map((v: null, index) => index);

  const [boardElements, setBoardElements] = useState<SudokuSquare[]>([]);

  const handleToggle = useCallback(
    index => {
      if (!boardElements.length) {
        return;
      }

      const newBoardElements = [...boardElements];

      const { display } = newBoardElements[index];
      newBoardElements[index] = {
        ...newBoardElements[index],
        display: !display
      };

      setBoardElements(newBoardElements);
    },
    [boardElements]
  );

  useEffect(() => {
    const baseArray = Array(9)
      .fill(null)
      .map((v: null, index) => index + 1);

    console.log('MATH::', Math.floor(Math.random() * 10));
    console.log('BASE ARRAY::', baseArray);

    const baseLine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const baseBoardArray = Array(81)
      .fill(null)
      .map(v => baseLine);

    for (let i = 0; i < 81; i++) {
      const indices = baseBoardArray
        .map((value, index) => ({ value, index }))
        .filter(obj => Array.isArray(obj.value));

      indices.sort(
        (indexA, indexB) => indexA.value.length - indexB.value.length
      );

      const shortIndices = indices.filter(
        index => index.value.length === indices[0].value.length
      );

      const index =
        shortIndices[Math.floor(Math.random() * shortIndices.length)];

      const valuesBoard = index.value.reduce((sum, v) => {
        sum[v] = 0;
        return sum;
      }, {});

      for (let k = 0; k < 81; k++) {
        if (!Array.isArray(baseBoardArray[k])) {
          continue;
        }

        const currentBlockPos =
          Math.floor((index.index % 9) / 3) + Math.floor(index.index / 27) * 3;
        const blockPos = Math.floor((k % 9) / 3) + Math.floor(k / 27) * 3;

        if (currentBlockPos === blockPos) {
          baseBoardArray[k]
            .filter(valueK => index.value.includes(valueK))
            .forEach(valueK => {
              valuesBoard[valueK] += 1;
            });
          continue;
        }

        const currentLinePos = Math.floor(index.index / 9);
        const linePos = Math.floor(k / 9);

        if (currentLinePos === linePos) {
          baseBoardArray[k]
            .filter(valueK => index.value.includes(valueK))
            .forEach(valueK => {
              valuesBoard[valueK] += 1;
            });
          continue;
        }

        const currentColumnPos = index.index % 9;
        const columnPos = k % 9;

        if (currentColumnPos === columnPos) {
          baseBoardArray[k]
            .filter(valueK => index.value.includes(valueK))
            .forEach(valueK => {
              valuesBoard[valueK] += 1;
            });
          continue;
        }
      }

      const valuesBoardArr = Object.keys(valuesBoard);

      valuesBoardArr.sort(
        (valueA, valueB) => valuesBoard[valueA] - valuesBoard[valueB]
      );

      const randomValue =
        // index.value[Math.floor(Math.random() * index.value.length)];
        Number(valuesBoardArr[0]);

      for (let k = 0; k < 81; k++) {
        if (!Array.isArray(baseBoardArray[k])) {
          continue;
        }

        const currentBlockPos =
          Math.floor((index.index % 9) / 3) + Math.floor(index.index / 27) * 3;
        const blockPos = Math.floor((k % 9) / 3) + Math.floor(k / 27) * 3;

        if (currentBlockPos === blockPos) {
          baseBoardArray[k] = baseBoardArray[k].filter(
            value => value !== randomValue
          );
          continue;
        }

        const currentLinePos = Math.floor(index.index / 9);
        const linePos = Math.floor(k / 9);

        if (currentLinePos === linePos) {
          baseBoardArray[k] = baseBoardArray[k].filter(
            value => value !== randomValue
          );
          continue;
        }

        const currentColumnPos = index.index % 9;
        const columnPos = k % 9;

        if (currentColumnPos === columnPos) {
          baseBoardArray[k] = baseBoardArray[k].filter(
            value => value !== randomValue
          );
          continue;
        }
      }

      baseBoardArray[index.index] = randomValue;
    }

    const values = baseBoardArray;

    const newBoardElements = values.map(value => {
      return { value, display: true };
    });

    setBoardElements(newBoardElements);
  }, []);

  return (
    <Container>
      {subContainers.map(sub => {
        const line = 3 * (sub % 3) + Math.floor(sub / 3) * 27;

        return (
          <SubContainer>
            {lineContainer.map(v => {
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

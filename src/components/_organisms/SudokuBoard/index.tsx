//@ts-ignore
//@ts-nocheck
import React, { useState, useEffect, useCallback } from 'react';
import { Container, SubContainer, SquareContainer } from './styles';

interface SudokuSquare {
  value: number;
}

interface SudokuBoardProps {
  count?: number;
}

const SudokuBoard: React.FC<SudokuBoardProps> = props => {
  const subContainers = Array(9)
    .fill(null)
    .map((v: null, index) => index);

  const lineContainer = Array(3)
    .fill(null)
    .map((v: null, index) => index);

  const [boardElements, setBoardElements] = useState<SudokuSquare[]>([]);
  // const [correction, setCorrection] = useState([]);

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

  const getValues = useCallback(() => {
    while (true) {
      const baseLine = Array(9)
        .fill(null)
        .map((v, index) => index + 1);

      const baseBoardArray = Array(81)
        .fill(null)
        .map(v => baseLine);

      baseBoardArray.forEach(() => {
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

        baseBoardArray.forEach((v, k) => {
          if (!Array.isArray(v)) {
            return;
          }

          const currentBlockPos =
            Math.floor((index.index % 9) / 3) +
            Math.floor(index.index / 27) * 3;
          const blockPos = Math.floor((k % 9) / 3) + Math.floor(k / 27) * 3;

          if (currentBlockPos === blockPos) {
            v.filter(valueK => index.value.includes(valueK)).forEach(valueK => {
              valuesBoard[valueK] += 1;
            });
            return;
          }

          const currentLinePos = Math.floor(index.index / 9);
          const linePos = Math.floor(k / 9);

          if (currentLinePos === linePos) {
            v.filter(valueK => index.value.includes(valueK)).forEach(valueK => {
              valuesBoard[valueK] += 1;
            });
            return;
          }

          const currentColumnPos = index.index % 9;
          const columnPos = k % 9;

          if (currentColumnPos === columnPos) {
            v.filter(valueK => index.value.includes(valueK)).forEach(valueK => {
              valuesBoard[valueK] += 1;
            });
            return;
          }
        });

        const valuesBoardArr = Object.keys(valuesBoard);

        valuesBoardArr.sort(
          (valueA, valueB) => valuesBoard[valueA] - valuesBoard[valueB]
        );

        const randomValue = Number(valuesBoardArr[0]);

        baseBoardArray.forEach((v, k) => {
          if (!Array.isArray(v)) {
            return;
          }

          const currentBlockPos =
            Math.floor((index.index % 9) / 3) +
            Math.floor(index.index / 27) * 3;
          const blockPos = Math.floor((k % 9) / 3) + Math.floor(k / 27) * 3;

          if (currentBlockPos === blockPos) {
            baseBoardArray[k] = v.filter(value => value !== randomValue);
            return;
          }

          const currentLinePos = Math.floor(index.index / 9);
          const linePos = Math.floor(k / 9);

          if (currentLinePos === linePos) {
            baseBoardArray[k] = v.filter(value => value !== randomValue);
            return;
          }

          const currentColumnPos = index.index % 9;
          const columnPos = k % 9;

          if (currentColumnPos === columnPos) {
            baseBoardArray[k] = v.filter(value => value !== randomValue);
            return;
          }
        });

        baseBoardArray[index.index] = randomValue;
      });

      const nanValue = baseBoardArray.find(value => isNaN(value));

      if (nanValue === undefined || nanValue === null) {
        return baseBoardArray;
      }
    }
  }, []);

  const getBoardElements = values => {
    // const notDisplayQuant = 30;

    const displayQuant = 30;

    const { boardElements } = values.reduce(
      (object, value) => {
        // const display =
        //   object.notDisplayQuant === 0 || Math.floor(Math.random() * 10) === 1;

        // if (!display) {
        //   object.notDisplayQuant -= 1;
        // }

        const display = Math.floor(Math.random() * 81) <= displayQuant;

        object.boardElements.push({ value: display ? value : null });

        return object;
      },
      {
        // notDisplayQuant,
        boardElements: []
      }
    );

    return boardElements;
  };

  useEffect(() => {
    const values = getValues();
    const boardElements = getBoardElements(values);

    // setCorrection(values);
    setBoardElements(boardElements);
  }, [props.count]);

  return (
    <Container>
      {subContainers.map(sub => {
        const line = 3 * (sub % 3) + Math.floor(sub / 3) * 27;

        return (
          <SubContainer>
            {lineContainer.map(v => {
              const base = (v % 3) * 9 + line;
              const start = base;
              const end = base + 3;

              return boardElements
                .slice(start, end)
                .map(({ value }, index) => (
                  <SquareContainer onClick={() => handleToggle(start + index)}>
                    {value}
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

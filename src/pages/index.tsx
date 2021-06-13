import React, { useState } from 'react';

import Template from '../components/_templates/home';
import SudokuBoard from '../components/_organisms/SudokuBoard';
import Button from '../components/_atoms/Button';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Template>
      <h1>Sudoku</h1>

      <SudokuBoard count={count} />

      <Button onClick={() => setCount(count => count + 1)}>Redo</Button>
    </Template>
  );
};

export default Home;

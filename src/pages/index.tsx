import React, { useState } from 'react';

import Template from '../components/_templates/home';
import SudokuBoard from '../components/_organisms/SudokuBoard';
import Button from '../components/_atoms/Button';

const Home: React.FC = () => {
  return (
    <Template>
      <h1>Sudoku</h1>

      <SudokuBoard />
    </Template>
  );
};

export default Home;

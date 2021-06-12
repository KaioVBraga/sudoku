import SudokuBoard from "../components/SudokuBoard";

import { Container, Content } from '../styles'

const Home = () => {
  return (
    <Container>
      <Content>
        <h1>Sudoku</h1>

        <SudokuBoard />
      </Content>
    </Container>
  );
};

export default Home;

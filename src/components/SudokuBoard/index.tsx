import { Container, SubContainer, SquareContainer } from "./styles";

const SudokuBoard = () => {

  const subContainers = Array(9).fill(null).map((v,index) => index);

  const boardElements = Array(81)
    .fill(null)
    .map((v, index) => index);

  return (

    <div>
    <Container>

      {/* {subContainers.map(sub => 
      <SubContainer>
        {boardElements.slice(0+sub*3,3+sub*3).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(9+sub*3,12+sub*3).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(18+sub*3,21+sub*3).map(element => <SquareContainer>{element}</SquareContainer>)}
      </SubContainer>
      )} */}

      <SubContainer>
        {boardElements.slice(0,3).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(9,12).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(18,21).map(element => <SquareContainer>{element}</SquareContainer>)}
      </SubContainer>

      <SubContainer>
        {boardElements.slice(3,6).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(12,15).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(21,24).map(element => <SquareContainer>{element}</SquareContainer>)}
      </SubContainer>

      <SubContainer>
        {boardElements.slice(6,9).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(15,18).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(24,27).map(element => <SquareContainer>{element}</SquareContainer>)}
      </SubContainer>

      <SubContainer>
        {boardElements.slice(27,30).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(36,39).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(45,48).map(element => <SquareContainer>{element}</SquareContainer>)}
      </SubContainer>

      <SubContainer>
        {boardElements.slice(30,33).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(39,42).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(48,51).map(element => <SquareContainer>{element}</SquareContainer>)}
      </SubContainer>
      
      <SubContainer>
        {boardElements.slice(33,36).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(42,45).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(51,54).map(element => <SquareContainer>{element}</SquareContainer>)}
      </SubContainer>

      <SubContainer>
        {boardElements.slice(54,57).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(63,66).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(72,75).map(element => <SquareContainer>{element}</SquareContainer>)}
      </SubContainer>

      <SubContainer>
        {boardElements.slice(57,60).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(66,69).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(75,78).map(element => <SquareContainer>{element}</SquareContainer>)}
      </SubContainer>
      
      <SubContainer>
        {boardElements.slice(60,63).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(69,72).map(element => <SquareContainer>{element}</SquareContainer>)}
        {boardElements.slice(78,81).map(element => <SquareContainer>{element}</SquareContainer>)}
      </SubContainer>
      
    </Container>

    <br />

    <Container>
      {subContainers.map((subContainer, subContainerIndex) => <SubContainer>
        {boardElements.slice(0+subContainerIndex*9,9+subContainerIndex*9).map((value) => (
          <SquareContainer>{(value ) + 1}</SquareContainer>
        ))}
      </SubContainer>)}
      
    </Container>
    </div>
    
  );
};

export default SudokuBoard;

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  margin: 0;
`;

const Title = styled.h1`
  font-size: 30px;
  color: ${(props) => props.theme.textColor};
`
function App() {
  return (
    <Wrapper>
      <Title>This is a title</Title>
    </Wrapper>
  );
}

export default App;
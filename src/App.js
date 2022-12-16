import styled from "styled-components";
import { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const animation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
  color: black;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    color: white;
    &:hover {
      font-size: 50px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">test</Emoji>
      </Box>
      <Emoji>no hover</Emoji>
    </Wrapper>
  );
}

export default App;
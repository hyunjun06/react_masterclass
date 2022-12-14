import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: teal;
`;

const Box2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <Box><Text>Hello</Text></Box>
      <Box2></Box2>
    </Father>
  );
}

export default App;

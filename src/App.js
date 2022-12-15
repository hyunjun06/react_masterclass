import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: tomato;
  border-radius: 15px;
  border: 0;
`;

const Input = styled.input.attrs({required: true, type: "text"})`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Button>Click me</Button>
      <Button as="a">Click me</Button>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
    </Father>
  );
}

export default App;
import "./App.css";
import Demo from "./section/Demo";
import styled from "@emotion/styled";

import { colors } from "@/styles/color";

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  padding: 10px;
`;

const Abstract = styled.div`
  background-color: ${colors.blue200};
  padding: 10px;
  font-size: 17px;
`;

const Author = styled.div`
  padding: 10px;
`;

const Result = styled.div`
  padding: 10px;
`;

function App() {
  return (
    <>
      <Title>Some Title</Title>
      <Abstract>abstract</Abstract>
      <Author>author</Author>
      <Demo />
      <Result>result</Result>
    </>
  );
}

export default App;

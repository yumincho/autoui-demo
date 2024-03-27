import styled from "@emotion/styled";

import "./App.css";
import { colors } from "@/styles/color";
import Demo from "./section/Demo";
import paperData from "./data/paper";

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  padding: 28px;
  text-wrap: balance;
`;

const Section = styled.div<{ white?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.white ? colors.white : colors.blue200)};
  padding: 24px 32px;
  align-items: center;
  gap: 4px;
`;

const SubTitle = styled.h2`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  max-width: 960px;
`;

const Abstract = styled.div`
  font-size: 17px;
  text-wrap: balance;
  text-align: left;
  max-width: 960px;
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
      <Title>{paperData.title}</Title>
      <Section>
        <SubTitle>Abstract</SubTitle>
        <Abstract>{paperData.abstract}</Abstract>
      </Section>
      <Author>author</Author>
      <Section white>
        <SubTitle>Playground</SubTitle>
        <Demo />
      </Section>
      <Result>result</Result>
    </>
  );
}

export default App;

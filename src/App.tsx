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
  background-color: ${colors.white};
`;

const Section = styled.div<{ white?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.white ? colors.white : colors.blue200)};
  padding: 24px 32px;
  align-items: center;
  gap: 8px;
`;

const SubTitle = styled.h2`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  max-width: 960px;
`;

const Caption = styled.div`
  width: 100%;
  font-size: 16px;
  color: ${colors.gray400};
  text-align: left;
  max-width: 960px;
  margin-bottom: 4px;
`;

const Abstract = styled.div`
  font-size: 17px;
  text-wrap: balance;
  text-align: left;
  max-width: 960px;
`;

function App() {
  return (
    <>
      <Title>{paperData.title}</Title>
      <Section>
        <SubTitle>Abstract</SubTitle>
        <Abstract>{paperData.abstract}</Abstract>
      </Section>
      <Section white>
        <SubTitle>GPT Shortcut Playground</SubTitle>
        <Caption>
          You can click the selected tab once again to see the dialogue used for
          generating the GPT shortcut.
        </Caption>
        <Demo />
      </Section>
    </>
  );
}

export default App;

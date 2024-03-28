import { useState } from "react";
import styled from "@emotion/styled";

import { colors } from "@/styles";
import Dialogue from "./Dialogue";
import type { DialogueDataKeys } from "@/data/dialogue";
import { dialogueDataKeys } from "@/data/dialogue";

const Layout = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
`;

const Playground = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  padding: 10px;
  gap: 10px;
  height: auto;
  width: 100%;
`;

const Input = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${colors.gray100};
  border-radius: 5px;
  height: 100%;
`;

const Demo = () => {
  const [utteranceType, setUtteranceType] = useState<DialogueDataKeys>(
    dialogueDataKeys[0]
  );

  return (
    <Layout>
      <Dialogue
        utteranceType={utteranceType}
        setUtteranceType={setUtteranceType}
      />

      <Playground>
        <Input>
          Input
          <textarea style={{ height: "100%" }} />
        </Input>
        <Result>some result...</Result>
      </Playground>
    </Layout>
  );
};

export default Demo;

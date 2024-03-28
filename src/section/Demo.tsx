import { useState } from "react";
import dialogueData from "@/data/dialogue";
import styled from "@emotion/styled";

import type { DialogueDataKeys } from "@/data/dialogue";
import { dialogueDataKeys } from "@/data/dialogue";
import { colors } from "@/styles";

const Layout = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
`;

const Dialogues = styled.div`
  display: flex;
  height: 100%;
  gap: 10px;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 8px;
  width: fit-content;
  overflow: auto;
`;

const Dialogue = styled.div`
  background-color: ${colors.gray100};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  border-radius: 5px;
  width: 50ch;
  border: 1px solid ${colors.gray300};
`;

interface UtteranceProps {
  role: string;
  checked?: boolean;
}

const Utterance = styled.div<UtteranceProps>`
  background-color: ${(props) =>
    props.role === "user" ? colors.white : colors.gray100};
  color: ${(props) => (props.checked ? colors.blue500 : "")};
  display: flex;
  gap: 10px;
  text-align: left;
  padding: 10px;
`;

const Role = styled.div`
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Playground = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
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
      <Dialogues>
        <Tags>
          {dialogueDataKeys.map((key) => (
            <button
              key={key}
              onClick={() => setUtteranceType(key)}
              style={{
                backgroundColor:
                  utteranceType == key ? colors.blue200 : colors.gray100,
              }}
            >
              {key}
            </button>
          ))}
        </Tags>
        <Dialogue>
          {dialogueData[utteranceType].map((utterance) => (
            <Utterance key={utterance.id} role={utterance.role}>
              <Role>
                {utterance.role == "assistant" ? (
                  <img src="assets/chatgpt.png" width="24" />
                ) : (
                  <img src="assets/user.svg" width="24" />
                )}
              </Role>
              <Content>
                <div>{utterance.content}</div>
              </Content>
            </Utterance>
          ))}
        </Dialogue>
      </Dialogues>

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

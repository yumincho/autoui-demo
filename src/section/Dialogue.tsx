import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import dialogueData from "@/data/dialogue";
import { dialogueDataKeys } from "@/data/dialogue";
import type { DialogueDataKeys } from "@/data/dialogue";
import styled from "@emotion/styled";
import { colors } from "@/styles";
import { RequestStateProps } from "./Demo";

const Layout = styled.div`
  display: flex;
  height: 100%;
  gap: 10px;
`;

const Tabs = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 4px;
  width: fit-content;
  overflow: auto;
`;

const DialogueContent = styled.div`
  background-color: ${colors.gray100};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  border-radius: 5px;
  width: 45ch;
  border: 1px solid ${colors.gray300};
  resize: horizontal;
  min-width: 240px;
  max-width: 600px;
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

const TabLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 120px;
  margin: 0;

  span {
    padding: 6px 8px;
    border-radius: 5px;
  }
`;

const Tab = styled.input<{ type: string; checked: boolean }>`
  appearance: none;
  margin: 0;

  + span {
    background-color: ${(props) =>
      props.checked ? colors.blue200 : colors.gray100};
  }

  + span:hover {
    background-color: ${colors.gray200};
  }

  &:checked + span:hover {
    background-color: ${colors.blue300};
  }
`;

const DialogueButton = styled.button`
  border: none;
  background-color: ${colors.white};
  color: ${colors.gray400};
  font-size: 12px;
  width: fit-content;
  margin-left: auto;
  padding: 0;
  appearance: none;
  margin-top: 4px;

  &:active,
  &:focus {
    outline: none;
  }
`;
interface DialogueProps {
  utteranceType: DialogueDataKeys;
  setUtteranceType: (utteranceType: DialogueDataKeys) => void;
}

const Dialogue = ({
  utteranceType,
  setUtteranceType,
  setRequestValue,
}: DialogueProps & Pick<RequestStateProps, "setRequestValue">) => {
  const [showDialogue, setShowDialogue] = useState<boolean>(false);

  return (
    <Layout>
      <Tabs>
        {dialogueDataKeys.map((key) => (
          <TabLabel>
            <Tab
              type="radio"
              name="shortcut"
              checked={utteranceType === key}
              key={key}
              onClick={() => {
                if (key === utteranceType) {
                  setShowDialogue((prev) => !prev);
                } else {
                  setRequestValue("");
                  setUtteranceType(key);
                }
              }}
              style={{
                backgroundColor:
                  utteranceType == key ? colors.blue200 : colors.gray100,
              }}
              value={key}
            />
            <span>{key}</span>
          </TabLabel>
        ))}
      </Tabs>
      {showDialogue && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DialogueContent>
            {dialogueData[utteranceType].slice(1).map((utterance) => (
              <Utterance key={utterance.id} role={utterance.role ?? ""}>
                <Role>
                  {utterance.role == "assistant" ? (
                    <img src="assets/chatgpt.png" width="24" />
                  ) : (
                    <img src="assets/user.svg" width="24" />
                  )}
                </Role>
                <Content>
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {utterance.content}
                  </Markdown>
                </Content>
              </Utterance>
            ))}
          </DialogueContent>
          <DialogueButton onClick={() => setShowDialogue(false)}>
            Close the Dialogue
          </DialogueButton>
        </div>
      )}
    </Layout>
  );
};

export default Dialogue;

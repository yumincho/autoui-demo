import { useState } from "react";

import dialogueData from "@/data/dialogue";
import { dialogueDataKeys } from "@/data/dialogue";
import styled from "@emotion/styled";
import { colors } from "@/styles";

const DialogueTab = styled.div`
  display: flex;
  height: 100%;
  gap: 10px;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 8px;
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
  utteranceType: string;
  setUtteranceType: (utteranceType: string) => void;
}

const Dialogue = ({ utteranceType, setUtteranceType }: DialogueProps) => {
  const [showDialogue, setShowDialogue] = useState<boolean>(true);

  return (
    <DialogueTab>
      <Tabs>
        {dialogueDataKeys.map((key) => (
          <button
            key={key}
            onClick={() => {
              setUtteranceType(key);
              setShowDialogue(true);
            }}
            style={{
              backgroundColor:
                utteranceType == key ? colors.blue200 : colors.gray100,
              width: "120px",
            }}
          >
            {key}
          </button>
        ))}
      </Tabs>
      {showDialogue && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DialogueContent>
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
          </DialogueContent>
          <DialogueButton onClick={() => setShowDialogue(false)}>
            Close the Dialogue
          </DialogueButton>
        </div>
      )}
    </DialogueTab>
  );
};

export default Dialogue;

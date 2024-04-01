import { Ref, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import dialogueData from "@/data/dialogue";
import { dialogueDataKeys } from "@/data/dialogue";
import type { DialogueDataKeys } from "@/data/dialogue";
import styled from "@emotion/styled";
import { colors } from "@/styles";

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
  setRequestValue: (value: string) => void;
}

const Dialogue = ({
  utteranceType,
  setUtteranceType,
  setRequestValue,
}: DialogueProps) => {
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
                setRequestValue(dialogueData[key][0].exampleRequest?.[0] ?? "");
                if (key === utteranceType) {
                  setShowDialogue((prev) => !prev);
                } else {
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
                  <Markdown
                    remarkPlugins={[remarkGfm, remarkBreaks]}
                    components={{
                      code({ className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return match ? (
                          <SyntaxHighlighter
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            style={materialDark}
                            ref={props.ref as Ref<SyntaxHighlighter>}
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        ) : (
                          <code {...props}>{children}</code>
                        );
                      },
                    }}
                  >
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

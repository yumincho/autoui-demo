import { useState } from "react";
import styled from "@emotion/styled";

import Dialogue from "./Dialogue";
import type { DialogueDataKeys } from "@/data/dialogue";
import dialogueData, { dialogueDataKeys } from "@/data/dialogue";
import Playground from "./Playground";

const Layout = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
  gap: 10px;
  max-width: 960px;
`;

export interface DialogueConfig {
  userID: string;
  shortcutID: string;
  shortcutIndex: number;
  exampleRequest: string[];
}

export interface RequestStateProps {
  requestValue: string;
  setRequestValue: (value: string) => void;
}

const Demo = () => {
  const [utteranceType, setUtteranceType] = useState<DialogueDataKeys>(
    dialogueDataKeys[0]
  );

  const dialogueConfig = dialogueData[utteranceType].slice(
    0,
    1
  )[0] as DialogueConfig;

  const [requestValue, setRequestValue] = useState<string>(
    dialogueConfig.exampleRequest[0]
  );

  return (
    <Layout>
      <Dialogue
        utteranceType={utteranceType}
        setUtteranceType={setUtteranceType}
        setRequestValue={setRequestValue}
      />

      <Playground
        userID={dialogueConfig.userID}
        shortcutID={dialogueConfig.shortcutID}
        shortcutIndex={dialogueConfig.shortcutIndex}
        exampleRequest={dialogueConfig.exampleRequest}
        requestValue={requestValue}
        setRequestValue={setRequestValue}
      />
    </Layout>
  );
};

export default Demo;

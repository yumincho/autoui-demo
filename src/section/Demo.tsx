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
`;

export interface DialogueConfig {
  userID: string;
  shortcutID: string;
  shortcutIndex: number;
}

const Demo = () => {
  const [utteranceType, setUtteranceType] = useState<DialogueDataKeys>(
    dialogueDataKeys[0]
  );

  const dialogueConfig = dialogueData[utteranceType].slice(
    0,
    1
  )[0] as DialogueConfig;

  return (
    <Layout>
      <Dialogue
        utteranceType={utteranceType}
        setUtteranceType={setUtteranceType}
      />

      <Playground
        userID={dialogueConfig.userID}
        shortcutID={dialogueConfig.shortcutID}
        shortcutIndex={dialogueConfig.shortcutIndex}
      />
    </Layout>
  );
};

export default Demo;

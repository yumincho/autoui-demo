import { useState } from "react";
import styled from "@emotion/styled";

import Dialogue from "./Dialogue";
import type { DialogueDataKeys } from "@/data/dialogue";
import { dialogueDataKeys } from "@/data/dialogue";
import Playground from "./Playground";

const Layout = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
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

      <Playground />
    </Layout>
  );
};

export default Demo;

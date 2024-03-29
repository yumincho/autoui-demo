import styled from "@emotion/styled";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { colors } from "@/styles";
import { FormEvent, useState } from "react";
import { DialogueConfig, RequestStateProps } from "./Demo";

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  height: auto;
  width: 100%;

  text-align: left;
  gap: 10px;
`;

const Request = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 32ch;
  max-width: 50ch;
  height: 100%;

  overflow: auto;
  resize: horizontal;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 5px;

  padding: 12px 16px;
  background-color: ${colors.gray200};
  overflow: auto;
`;

const ExampleButton = styled.button`
  width: fit-content;
  background-color: ${colors.blue200};

  font-size: 12px;
`;

const SendButton = styled.button`
  width: auto;
  border: none;

  background-color: ${colors.blue500};
  color: ${colors.white};

  &:disabled {
    background-color: ${colors.gray200};
    color: ${colors.gray400};
    cursor: not-allowed;
  }
`;

const url = "http://server.hyungyu.com:7161/runShortcut";

const data = (
  userID: string,
  shortcutID: string,
  shortcutIndex: number,
  value: string
) => ({
  userID,
  shortcutID,
  shortcutIndex,
  input: [
    {
      name: "Text",
      value,
    },
  ],
});

const handleRequest = async (
  userID: string,
  shortcutID: string,
  shortcutIndex: number,
  value: string
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data(userID, shortcutID, shortcutIndex, value)),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return { result: "Failed to send request" };
  }
};

const Playground = ({
  userID,
  shortcutID,
  shortcutIndex,
  exampleRequest,
  requestValue,
  setRequestValue,
}: DialogueConfig & RequestStateProps) => {
  const [result, setResult] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSendAble, setIsSendAble] = useState<boolean>(true);

  const handleClick = async (e: FormEvent, value: string) => {
    e.preventDefault();
    setIsSending(true);
    setIsSendAble(false);
    setResult("Generating resopnse...");
    const result = await handleRequest(
      userID,
      shortcutID,
      shortcutIndex,
      value
    );
    setResult(result.result);
    setIsSendAble(true);
  };

  return (
    <Layout>
      <Request onSubmit={(e) => handleClick(e, requestValue)}>
        <textarea
          style={{ height: "100%", resize: "none", padding: "6px 8px" }}
          onChange={(e) => {
            setRequestValue(e.target.value);
            !isSending && setIsSendAble(e.target.value.length > 0);
          }}
          value={requestValue}
          placeholder="Type your own shortcut input here..."
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          {exampleRequest && (
            <div
              style={{
                fontSize: "12px",
                fontStyle: "italic",
              }}
            >
              Not sure which input to use? Try an example:
            </div>
          )}
          <div style={{ display: "flex", gap: "2px", overflow: "auto" }}>
            {exampleRequest?.map((request, index) => (
              <ExampleButton
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setRequestValue(request);
                }}
              >
                Example {index + 1}
              </ExampleButton>
            ))}
          </div>
        </div>
        <SendButton disabled={!isSendAble}>Send</SendButton>
      </Request>

      <Result>
        <Markdown remarkPlugins={[remarkGfm]}>{result}</Markdown>
      </Result>
    </Layout>
  );
};

export default Playground;

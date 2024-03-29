import styled from "@emotion/styled";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { colors } from "@/styles";
import { FormEvent, useState } from "react";
import { DialogueConfig } from "./Demo";

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

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.error("Failed to fetch");
    }
  } catch (error) {
    console.error(error);
  }
};

const Playground = ({
  userID,
  shortcutID,
  shortcutIndex,
  exampleRequest,
}: DialogueConfig) => {
  const [result, setResult] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const handleClick = async (e: FormEvent, value: string) => {
    e.preventDefault();
    setResult("Loading...");
    const result = await handleRequest(
      userID,
      shortcutID,
      shortcutIndex,
      value
    );
    setResult(result.result);
  };

  return (
    <Layout>
      <Request onSubmit={(e) => handleClick(e, value)}>
        <textarea
          style={{ height: "100%", resize: "none", padding: "6px 8px" }}
          onChange={(e) => setValue(e.target.value)}
          value={value}
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
                  setValue(request);
                }}
              >
                Example {index + 1}
              </ExampleButton>
            ))}
          </div>
        </div>
        <SendButton disabled={value === ""}>Send</SendButton>
      </Request>

      <Result>
        <Markdown remarkPlugins={[remarkGfm]}>{result}</Markdown>
      </Result>
    </Layout>
  );
};

export default Playground;

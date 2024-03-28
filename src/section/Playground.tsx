import styled from "@emotion/styled";
import Markdown from "react-markdown";

import { colors } from "@/styles";
import { FormEvent, useState } from "react";
import { DialogueConfig } from "./Demo";

const Layout = styled.div`
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

const url = "https://server.hyungyu.com:7161/runShortcut";
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

const Playground = ({ userID, shortcutID, shortcutIndex }: DialogueConfig) => {
  const [result, setResult] = useState<string>("");
  const [value, setValue] = useState<string>("How does the gravity work?");

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
      <form onSubmit={(e) => handleClick(e, value)}>
        <Input>
          Input
          <textarea
            style={{ height: "100%" }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Input>
        <button>Send</button>
      </form>

      <Result>
        <Markdown>{result}</Markdown>
      </Result>
    </Layout>
  );
};

export default Playground;

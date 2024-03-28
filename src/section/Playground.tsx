import styled from "@emotion/styled";

import { colors } from "@/styles";

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

const Playground = () => {
  return (
    <Layout>
      <Input>
        Input
        <textarea style={{ height: "100%" }} />
      </Input>
      <Result>some result...</Result>
    </Layout>
  );
};

export default Playground;

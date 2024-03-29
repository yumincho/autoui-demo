import realDialogue1 from "./realDialogue/qwdlkqjwd_0.json";
import realDialogue2 from "./realDialogue/qwdlkqjwd_1.json";
import realDialogue3 from "./realDialogue/qwdlkqjwd_3.json";
import realDialogue4 from "./realDialogue/qwdlkqjwd_8.json";
import realDialogue5 from "./realDialogue/qwdlkqjwd_4.json";
import realDialogue6 from "./realDialogue/lwkejflkwjefwljefj_1.json";

const dialogueData = {
  "Writing comments": realDialogue1,
  "Vegetarian and gluten-free recipe": realDialogue2,
  "Write concise codes for python one-liner": realDialogue3,
  "Personalized calculator for complex computations": realDialogue4,
  "Simple explanations with bullet points": realDialogue5,
  "Respond with some very specific format": realDialogue6,
};

export default dialogueData;
export const dialogueDataKeys = Object.keys(dialogueData) as Array<
  keyof typeof dialogueData
>;
export type DialogueDataKeys = (typeof dialogueDataKeys)[number];

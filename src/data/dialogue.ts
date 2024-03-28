import dialogue1 from "./dialogue/a1.json";
import dialogue2 from "./dialogue/a2.json";
import dialogue3 from "./dialogue/a3.json";
import dialogue4 from "./dialogue/a4.json";
import dialogue5 from "./dialogue/a5.json";
import dialogue6 from "./dialogue/a6.json";
import dialogue7 from "./dialogue/a7.json";
import dialogue8 from "./dialogue/a8.json";
import dialogue9 from "./dialogue/a9.json";
import dialogue10 from "./dialogue/a10.json";
import dialogue11 from "./dialogue/a11.json";
import dialogue12 from "./dialogue/a12.json";
import dialogue13 from "./dialogue/a13.json";
import dialogue14 from "./dialogue/a14.json";
import dialogue15 from "./dialogue/a15.json";
import dialogue16 from "./dialogue/a16.json";
import dialogue17 from "./dialogue/a16.json";
import dialogue18 from "./dialogue/a16.json";
import dialogue19 from "./dialogue/a16.json";
import dialogue20 from "./dialogue/a16.json";

const dialogueData = {
  [dialogue1[0].category]: dialogue1,
  [dialogue2[0].category]: dialogue2,
  [dialogue3[0].category]: dialogue3,
  [dialogue4[0].category]: dialogue4,
  [dialogue5[0].category]: dialogue5,
  [dialogue6[0].category]: dialogue6,
  [dialogue7[0].category]: dialogue7,
  [dialogue8[0].category]: dialogue8,
  [dialogue9[0].category]: dialogue9,
  [dialogue10[0].category]: dialogue10,
  [dialogue11[0].category]: dialogue11,
  [dialogue12[0].category]: dialogue12,
  [dialogue13[0].category]: dialogue13,
  [dialogue14[0].category]: dialogue14,
  [dialogue15[0].category]: dialogue15,
  [dialogue16[0].category]: dialogue16,
  [dialogue17[0].category]: dialogue17,
  [dialogue18[0].category]: dialogue18,
  [dialogue19[0].category]: dialogue19,
  [dialogue20[0].category]: dialogue20,
};

export default dialogueData;
export const dialogueDataKeys = Object.keys(dialogueData) as Array<
  keyof typeof dialogueData
>;
export type DialogueDataKeys = (typeof dialogueDataKeys)[number];

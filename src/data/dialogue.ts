const dialogueData = {
  summarization: [
    {
      content:
        "Generate a summary of the following news article.\nBy . Gerri Peev . PUBLISHED: . 20:07 EST, 27 October 2013 . | . UPDATED: . 20:07 EST, 27 October 2013 . The small energy firm Ed Miliband switched to so he could cut his fuel bills has warned his prize freeze could drive it out of business. First Utility, the energy company he swapped to after receiving a \u00a31,000 bill from E.On, hit out at the Labour leader\u2019s strategy for bringing down prices. Mr Miliband told the Mail on Sunday that he and wife Justine decided to switch from E.On to First Utility after a 9 per cent price hike. The energy firm that Labour Party Leader Ed Miliband has switched to says it will go bankrupt if his price fix becomes law . He decided that the \u00a31000 bill last winter was the last straw and told the German energy giant it had just lost a customer. He joined First Utility, a smaller firm outside the Big Six dominating the market. First Utility announced its own price freeze until March this September, just after the Labour leader pledged to cap energy prices for 20 months if he wins power. First Utility chief executive Ian McCraig said Miliband’s price freeze ‘could put me under’ But First Utility chief executive Ian McCaig said Mr Miliband\u2019s price freeze was impractical for small suppliers. \u2018Bluntly, it could put me under,\u2019 he said. Instead, the company wants to control its own prices and when it offers discounts to customers. First Utility has pledged not to hike up gas and electricity charges until after the winter and has challenged the Big Six to follow.",
      id: "h3W3F0OrIZ",
      intent: "None",

      role: "user",
      shortcut: false,
    },
    {
      content:
        "Summary:\n\nEd Miliband, the Labour Party Leader, switched his energy supplier to First Utility after receiving a high bill from E.On. Following a 9% price hike from E.On, Miliband received a \u00a31,000 bill, which prompted him to switch to a smaller energy firm. However, First Utility, the company he chose, has expressed concerns that Miliband’s proposal to freeze energy prices could lead to its bankruptcy. First Utility CEO Ian McCaig criticized the proposed price freeze as being impractical for smaller suppliers and stated that it could potentially put his company out of business. While First Utility has committed to not raising their gas and electricity prices until after the current winter season, they prefer to manage their own pricing and discounts. The firm has also encouraged the Big Six energy companies to follow its lead and freeze prices for a period.",
      id: "pCi4DyPqgF",
      role: "assistant",
    },
    {
      content: "Can you improve the writing?",
      id: "i2xPYTp7cE",
      intent: "None",
      role: "user",
      shortcut: false,
    },
    {
      checked: true,
      content:
        "Revised Summary:\n\nLabour Party Leader Ed Miliband switched his household’s energy provider to First Utility after E.On, his previous supplier, imposed a 9% rate increase, resulting in a \u00a31,000 energy bill. The decision to change providers was spurred by the steep cost. Concerns have arisen from First Utility following Miliband’s policy proposal to institute a energy price freeze, with the company’s CEO, Ian McCaig, warning that such a measure could threaten the survival of smaller energy firms like his. McCaig argues that a broad price freeze is unfeasible for small suppliers and advocates for the flexibility to set their own pricing and offer customer discounts independently. In a preemptive move, First Utility has already frozen its energy prices until the end of the winter, challenging major energy companies, known as the Big Six, to match this commitment to consumers.",
      id: "3EemaKvi1T",
      role: "assistant",
    },
    {
      content: "Can you use simpler words?",
      id: "lJJJFuf2lE",
      intent: "None",
      role: "user",
      shortcut: false,
    },
    {
      checked: true,
      content:
        "Revised Summary:\n\nEd Miliband, a leader in the Labour Party, picked a new energy company, First Utility, because his old company, E.On, made him pay too much. After his bill reached \u00a31,000, Miliband decided it was time to switch. However, the boss of First Utility, Ian McCaig, is worried because Miliband has a plan to stop energy companies from raising their prices. McCaig says this plan could make small companies like his go out of business because they can’t afford to keep prices the same all the time. First Utility has promised its customers that it won’t raise prices until winter is over and wants the big energy companies to do the same.",
      id: "B6yPdaTnH6",
      role: "assistant",
    },
    {
      content: "",
      id: "2UBNmgnkJo",
      intent: "None",
      role: "user",
      shortcut: false,
    },
    {
      content:
        "It seems like your latest message was empty. If you have another question or need further assistance, please feel free to ask!",
      id: "oPdc26148J",
      role: "assistant",
    },
    {
      content: "Can you give me summarized points?",
      id: "fa9blAmElI",
      intent: "None",
      role: "user",
      shortcut: false,
    },
    {
      checked: true,
      content:
        "- Ed Miliband changed his energy supplier to First Utility from E.On due to a high bill.\n- Miliband’s proposal to freeze energy prices worries First Utility’s CEO.\n- The CEO, Ian McCaig, believes the price freeze could bankrupt small suppliers like his.\n- First Utility has its prices frozen until after winter and wants large companies to do the same.",
      id: "AjoL7nBWxi",
      role: "assistant",
    },
    {
      content: "Thank you!",
      id: "tEmt06rr1D",
      intent: "None",
      role: "user",
      shortcut: false,
    },
    {
      content:
        "You’re welcome! If you have any more questions or need further information, feel free to ask. Have a great day!",
      id: "G2Vs9BNaSb",
      role: "assistant",
    },
  ],
  simplificatin: [
    {
      content: "Hi!",
      id: "h3W3F0OrIZ",
      intent: "None",

      role: "user",
      shortcut: false,
    },
    {
      content: "Hello. This is simplificated result.",
      id: "pCi4DyPqgF",
      role: "assistant",
    },
  ],
};

export default dialogueData;
export const dialogueDataKeys = Object.keys(dialogueData) as Array<
  keyof typeof dialogueData
>;
export type DialogueDataKeys = (typeof dialogueDataKeys)[number];

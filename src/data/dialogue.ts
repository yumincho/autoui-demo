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
  informationSeeking1: [
    {
      category: "Information seeking",
      subcategory: "Recipe Retrieval",
      id: 1,
      role: "user",
      content: "I'm looking for a traditional Italian lasagna recipe.",
      condition:
        "User seeks a traditional Italian lasagna recipe but hasn't specified any dietary restrictions, preferences, or specific ingredients they want to include or avoid.",
    },
    {
      category: "Information seeking",
      subcategory: "Recipe Retrieval",
      id: 1,
      role: "assistant",
      content:
        "Sure, I can help with that. Traditional Italian lasagna typically features layers of flat lasagna noodles, rag\u00f9 (a meat sauce), b\u00e9chamel sauce, and Parmigiano-Reggiano cheese. Would you like a recipe that includes all these elements, or do you have any dietary restrictions or preferences I should be aware of?",
      condition:
        "User seeks a traditional Italian lasagna recipe but hasn't specified any dietary restrictions, preferences, or specific ingredients they want to include or avoid.",
    },
    {
      category: "Information seeking",
      subcategory: "Recipe Retrieval",
      id: 2,
      role: "user",
      content:
        "Actually, I'd prefer a vegetarian option, if possible. And I have some spinach and mushrooms in the fridge I'd like to use.",
      condition:
        "User prefers a vegetarian lasagna recipe and wants to incorporate spinach and mushrooms they already have. They are open to suggestions for additional vegetables or ingredient substitutions.",
    },
    {
      category: "Information seeking",
      subcategory: "Recipe Retrieval",
      id: 2,
      role: "assistant",
      content:
        "Great, I can provide a vegetarian lasagna recipe that includes spinach and mushrooms. The recipe will replace the traditional rag\u00f9 with a rich tomato sauce and will be layered with your spinach and mushrooms, ricotta cheese, mozzarella, and b\u00e9chamel sauce. Does that sound good, or would you like to include any other vegetables or substitute any ingredients?",
      condition:
        "User prefers a vegetarian lasagna recipe and wants to incorporate spinach and mushrooms they already have. They are open to suggestions for additional vegetables or ingredient substitutions.",
    },
    {
      category: "Information seeking",
      subcategory: "Recipe Retrieval",
      id: 3,
      role: "user",
      content:
        "That sounds perfect, but could you also make it gluten-free? And how about adding some zucchini and replacing b\u00e9chamel sauce with something lighter?",
      condition:
        "User requests a gluten-free vegetarian lasagna recipe, incorporating spinach, mushrooms, and zucchini, and prefers replacing b\u00e9chamel sauce with a lighter alternative.",
    },
    {
      category: "Information seeking",
      subcategory: "Recipe Retrieval",
      id: 3,
      role: "assistant",
      content:
        "Certainly! For a gluten-free vegetarian lasagna, we'll use gluten-free lasagna noodles. I'll include zucchini along with the spinach and mushrooms. Instead of b\u00e9chamel sauce, we can use a light ricotta cheese mixture seasoned with garlic and herbs for creaminess without the heaviness. The lasagna will still include layers of this ricotta mixture, tomato sauce, and a blend of mozzarella and Parmesan cheese. Would you like any tips on preparing the vegetables or assembling the lasagna?",
      condition:
        "User requests a gluten-free vegetarian lasagna recipe, incorporating spinach, mushrooms, and zucchini, and prefers replacing b\u00e9chamel sauce with a lighter alternative.",
    },
    {
      category: "Information seeking",
      subcategory: "Recipe Retrieval",
      id: 4,
      role: "user",
      content:
        "Yes, please provide tips on preparing the vegetables and assembling the lasagna. Also, could the recipe be suitable for freezing and reheating?",
      condition:
        "User seeks advice on preparing vegetables and assembling the lasagna for optimal freezing and reheating, indicating a desire for a recipe that's convenient for later use.",
    },
    {
      category: "Information seeking",
      subcategory: "Recipe Retrieval",
      id: 4,
      role: "assistant",
      content:
        "Absolutely! For the vegetables, lightly saut\u00e9 the spinach, mushrooms, and zucchini separately with a bit of olive oil and garlic until just tender. This prevents excess moisture in the lasagna. When assembling, start with a layer of tomato sauce at the bottom of your baking dish, followed by gluten-free noodles, the ricotta mixture, vegetables, and a sprinkle of cheese. Repeat the layers, ending with cheese on top. This lasagna freezes well; just cool it completely, cover tightly, and freeze. Reheat in the oven at 350\u00b0F until thoroughly warm. Would you like any additional modifications or details?",
      condition:
        "User seeks advice on preparing vegetables and assembling the lasagna for optimal freezing and reheating, indicating a desire for a recipe that's convenient for later use.",
    },
  ],
  informationSeeking2: [
    {
      category: "Information seeking",
      subcategory: "Travel Advisory Update",
      id: 1,
      role: "user",
      content: "Can you provide a travel advisory update for Thailand?",
      condition:
        "The user seeks a general overview of travel advisories for Thailand, without specifying the type of information most relevant to their needs (e.g., health risks, security concerns, entry requirements).",
    },
    {
      category: "Information seeking",
      subcategory: "Travel Advisory Update",
      id: 1,
      role: "assistant",
      content:
        "Certainly! Here's a basic travel advisory update for Thailand: Currently, travelers are advised to exercise caution due to reports of civil unrest and potential health risks in some areas. Tourists should stay informed about local conditions and follow any directives from local authorities. It's also recommended to have comprehensive travel insurance.",
      condition:
        "The user seeks a general overview of travel advisories for Thailand, without specifying the type of information most relevant to their needs (e.g., health risks, security concerns, entry requirements).",
    },
    {
      category: "Information seeking",
      subcategory: "Travel Advisory Update",
      id: 2,
      role: "user",
      content:
        "I'm specifically interested in health risks and COVID-19 regulations for travelers. Can you include this?",
      condition:
        "The user has specified an interest in health-related advisories, particularly regarding COVID-19 regulations and other health risks, indicating a desire for detailed and specific information on these topics.",
    },
    {
      category: "Information seeking",
      subcategory: "Travel Advisory Update",
      id: 2,
      role: "assistant",
      content:
        "Absolutely! Here's an updated version focusing on health risks and COVID-19 regulations for Thailand: Travelers to Thailand are advised to be vigilant about health risks, including tropical diseases and current COVID-19 regulations. As of the latest update, proof of vaccination is required for entry, and masks are mandatory in public spaces and on public transportation. Visitors are encouraged to frequently sanitize their hands and maintain social distancing where possible. Check the local health department's website for the most current information before your trip.",
      condition:
        "The user has specified an interest in health-related advisories, particularly regarding COVID-19 regulations and other health risks, indicating a desire for detailed and specific information on these topics.",
    },
    {
      category: "Information seeking",
      subcategory: "Travel Advisory Update",
      id: 3,
      role: "user",
      content:
        "Can you add information about visa requirements for U.S. citizens and any safety tips for tourist areas?",
      condition:
        "The user now seeks a more detailed and comprehensive update, including specific entry requirements for U.S. citizens and safety advice for tourists, indicating a preference for a holistic overview that addresses multiple concerns.",
    },
    {
      category: "Information seeking",
      subcategory: "Travel Advisory Update",
      id: 3,
      role: "assistant",
      content:
        "Certainly! Here's a more comprehensive travel advisory update for Thailand, including health risks, COVID-19 regulations, visa requirements for U.S. citizens, and safety tips for tourist areas: Travelers to Thailand should be aware of health risks such as tropical diseases and adhere to current COVID-19 regulations, including mandatory proof of vaccination for entry and mask usage in public. U.S. citizens must obtain a visa if planning to stay more than 30 days. For safety, tourists are advised to remain vigilant in crowded tourist areas, keep belongings secure, and avoid demonstrations or large gatherings. It's recommended to follow local authority directives and stay informed about the local situation through reliable sources.",
      condition:
        "The user now seeks a more detailed and comprehensive update, including specific entry requirements for U.S. citizens and safety advice for tourists, indicating a preference for a holistic overview that addresses multiple concerns.",
    },
  ],
  codeAndDegugging1: [
    {
      category: "Coding & debugging",
      subcategory: "Bug Identification",
      id: 1,
      role: "user",
      content:
        "I'm trying to get the average of a list of numbers with my Python function, but it's not working as expected. Here's the code: def calculate_average(numbers): sum_numbers = sum(numbers); count = len(numbers); average = sum / count; return average; numbers = [10, 20, 30, 40, 50]; print(calculate_average(numbers)). The function should calculate the average of the numbers list, but it's throwing an error instead.",
      condition:
        "The user has provided a snippet of Python code with a subtle bug and a description of what they expect it to do. The user needs to identify and correct the bug.",
    },
    {
      category: "Coding & debugging",
      subcategory: "Bug Identification",
      id: 1,
      role: "assistant",
      content:
        "It looks like there's a small mistake in your code that's causing the issue. In the line where you're calculating the average, you're using `sum` instead of `sum_numbers` to divide by `count`. The correct line should be `average = sum_numbers / count`. This will fix the error and correctly calculate the average of the numbers list.",
      condition:
        "The user has provided a snippet of Python code with a subtle bug and a description of what they expect it to do. The user needs to identify and correct the bug.",
    },
    {
      category: "Coding & debugging",
      subcategory: "Bug Identification",
      id: 2,
      role: "user",
      content:
        "Thanks for pointing that out! Could you also explain why using 'sum' caused an error and how using 'sum_numbers' fixes it?",
      condition:
        "The user now understands there was a bug in their code and is seeking a deeper explanation of why the error occurred and how the proposed solution corrects it.",
    },
    {
      category: "Coding & debugging",
      subcategory: "Bug Identification",
      id: 2,
      role: "assistant",
      content:
        "Certainly! In Python, `sum` is a built-in function that's used to add up all the numbers in an iterable, like a list. When you mistakenly used `sum` instead of `sum_numbers` in the line `average = sum / count`, Python thought you were trying to use the `sum` function instead of the variable `sum_numbers` that holds the total of your numbers list. Since `sum` without parentheses is incorrect syntax for calling a function, it caused an error. By using `sum_numbers`, which is the correct variable that stores the sum of the numbers in your list, you're correctly dividing the total sum by the count of numbers to find the average, thus fixing the error.",
      condition:
        "The user now understands there was a bug in their code and is seeking a deeper explanation of why the error occurred and how the proposed solution corrects it.",
    },
    {
      category: "Coding & debugging",
      subcategory: "Bug Identification",
      id: 3,
      role: "user",
      content:
        "That makes sense. Can you add comments to the code to explain each step? It will help me understand better and remember how to avoid similar mistakes in the future.",
      condition:
        "The user now seeks to enhance their understanding by asking for comments within the code that explain the functionality of each part. This request aims to improve their comprehension and to help avoid similar mistakes in the future.",
    },
    {
      category: "Coding & debugging",
      subcategory: "Bug Identification",
      id: 3,
      role: "assistant",
      content:
        "Absolutely! Here's your code with added comments explaining each step: \ndef calculate_average(numbers):\n# Calculate the total sum of the numbers in the list\nsum_numbers = sum(numbers)\n\n# Find the count of numbers in the list\ncount = len(numbers)\n\n# Calculate the average by dividing the total sum by the count of numbers\n# Using 'sum_numbers' correctly refers to the calculated sum above\naverage = sum_numbers / count\nreturn average\n\n# Define a list of numbers\nnumbers = [10, 20, 30, 40, 50]\n\n# Call the function with the numbers list and print the result\nprint(calculate_average(numbers))\nAdding comments like these can be a great way to document what each part of your code is doing, making it easier for both you and others to understand and maintain the code.",
      condition:
        "The user now seeks to enhance their understanding by asking for comments within the code that explain the functionality of each part. This request aims to improve their comprehension and to help avoid similar mistakes in the future.",
    },
  ],
  codeAndDebugging2: [
    {
      category: "Coding & debugging",
      subcategory: "Error Message Explanation",
      id: 1,
      role: "user",
      content:
        "I keep getting the error message 'ERR_CONNECTION_TIMED_OUT' when I try to visit certain websites. What does this mean and how can I fix it?",
      condition:
        "The user has experienced a specific error message while attempting to access websites and seeks both an explanation and potential solutions.",
    },
    {
      category: "Coding & debugging",
      subcategory: "Error Message Explanation",
      id: 1,
      role: "assistant",
      content:
        "The error message 'ERR_CONNECTION_TIMED_OUT' typically means your browser couldn't establish a connection to the website you're trying to reach because the server took too long to respond. This can happen for various reasons, such as network connectivity issues, the website being down, or firewall settings preventing access. To fix it, you might try checking your internet connection, ensuring the website is accessible, or adjusting your firewall settings.",
      condition:
        "The user has experienced a specific error message while attempting to access websites and seeks both an explanation and potential solutions.",
    },
    {
      category: "Coding & debugging",
      subcategory: "Error Message Explanation",
      id: 2,
      role: "user",
      content:
        "Can you provide more detailed steps on how to troubleshoot this error? I'm not very tech-savvy.",
      condition:
        "The user requires a more detailed, step-by-step guide to troubleshoot the issue, suitable for someone with limited technical knowledge.",
    },
    {
      category: "Coding & debugging",
      subcategory: "Error Message Explanation",
      id: 2,
      role: "assistant",
      content:
        "Certainly! Here are more detailed steps to troubleshoot the 'ERR_CONNECTION_TIMED_OUT' error: 1. Check your internet connection by trying to visit a website you're sure is working. 2. If you're using a wireless connection, try moving closer to your Wi-Fi router. 3. Restart your modem and router by unplugging them for about 30 seconds, then plugging them back in. 4. Try accessing the site using a different browser or device to see if the issue persists. 5. Temporarily disable your firewall and antivirus software, then try to visit the website again. (Remember to enable them again after testing.) 6. Flush your DNS cache. On Windows, open Command Prompt and type 'ipconfig /flushdns'. 7. If possible, try connecting through a different network to see if the issue is related to your current network.",
      condition:
        "The user requires a more detailed, step-by-step guide to troubleshoot the issue, suitable for someone with limited technical knowledge.",
    },
    {
      category: "Coding & debugging",
      subcategory: "Error Message Explanation",
      id: 3,
      role: "user",
      content:
        "What if none of those steps work? Are there more advanced steps I can take?",
      condition:
        "The user has tried basic troubleshooting steps without success and now seeks more advanced technical solutions.",
    },
    {
      category: "Coding & debugging",
      subcategory: "Error Message Explanation",
      id: 3,
      role: "assistant",
      content:
        "If the basic troubleshooting steps don't resolve the 'ERR_CONNECTION_TIMED_OUT' error, here are some advanced steps you can try: 1. Change your DNS servers. You can switch to Google DNS (8.8.8.8 and 8.8.4.4) or Cloudflare DNS (1.1.1.1). This change can sometimes improve your connection stability. 2. Check your computer's hosts file for any incorrect entries related to the website. The hosts file can override DNS and block websites. On Windows, it's located at C:\\Windows\\System32\\drivers\\etc\\hosts. 3. Contact your ISP. Sometimes the issue can be on their end, especially if you've determined that the website is accessible from other networks. 4. If you're trying to access a website you manage, check the server's configuration and ensure it's not blocking your IP or experiencing downtime.",
      condition:
        "The user has tried basic troubleshooting steps without success and now seeks more advanced technical solutions.",
    },
  ],
  reasoning: [
    {
      category: "Reasoning",
      subcategory: "Problem-Solving Reasoning",
      id: 1,
      role: "user",
      content: "How can we tackle the issue of food waste in schools?",
      condition:
        "The user seeks a general strategy for reducing food waste in schools.",
    },
    {
      category: "Reasoning",
      subcategory: "Problem-Solving Reasoning",
      id: 1,
      role: "assistant",
      content:
        "To address food waste in schools, start by assessing the scale and sources of waste. Implement strategies like improving meal planning, engaging students in awareness programs, and introducing composting. Collaborating with local food banks for distribution of excess food can also be effective.",
      condition:
        "The user seeks a general strategy for reducing food waste in schools.",
    },
    {
      category: "Reasoning",
      subcategory: "Problem-Solving Reasoning",
      id: 2,
      role: "user",
      content:
        "This is a good start, but can we make it more specific? I'm looking for actionable steps that involve both students and the school's administration.",
      condition:
        "The user requests more detailed and actionable steps involving both students and administration in the efforts to reduce food waste.",
    },
    {
      category: "Reasoning",
      subcategory: "Problem-Solving Reasoning",
      id: 2,
      role: "assistant",
      content:
        "Certainly! To make the approach more actionable: 1) Conduct surveys to identify specific reasons behind food waste directly from students. 2) Implement a 'pre-order your lunch' program to adjust meal preparation according to real demand. 3) Organize educational workshops on food waste, teaching students about its environmental impact and how they can make a difference. 4) Set up a system for collecting unused food that is still safe to eat, and partner with local charities to distribute it. 5) Launch a composting initiative for organic waste, and use the compost for the school's garden, if available.",
      condition:
        "The user requests more detailed and actionable steps involving both students and administration in the efforts to reduce food waste.",
    },
    {
      category: "Reasoning",
      subcategory: "Problem-Solving Reasoning",
      id: 3,
      role: "user",
      content:
        "This is much closer to what I was thinking. However, can you add a component that involves using technology to facilitate these efforts? Also, mention how to measure the impact of these strategies.",
      condition:
        "The user desires the inclusion of technology solutions to aid in reducing food waste and asks for methods to measure the impact of these strategies.",
    },
    {
      category: "Reasoning",
      subcategory: "Problem-Solving Reasoning",
      id: 3,
      role: "assistant",
      content:
        "Absolutely! Incorporating technology and impact measurement, the refined strategy includes: 1) Utilize a mobile app that allows students to pre-order meals, reducing over-preparation. 2) Install smart bins equipped with weight sensors and cameras to monitor and analyze what gets thrown away, helping in identifying food waste patterns. 3) Conduct workshops using interactive online platforms to broaden student engagement. 4) Partner with a food donation app that connects schools with local charities for efficient food distribution. 5) Use the data collected from smart bins and the mobile app to track the reduction in food waste over time, setting measurable targets for waste reduction and evaluating the effectiveness of the implemented strategies.",
      condition:
        "The user desires the inclusion of technology solutions to aid in reducing food waste and asks for methods to measure the impact of these strategies.",
    },
    {
      category: "Reasoning",
      subcategory: "Problem-Solving Reasoning",
      id: 4,
      role: "user",
      content:
        "This is perfect. Can you add a real-world example of a school that successfully implemented such a program?",
      condition:
        "The user requests the inclusion of a real-world example to illustrate the successful application of the discussed strategies in reducing food waste at a school.",
    },
    {
      category: "Reasoning",
      subcategory: "Problem-Solving Reasoning",
      id: 4,
      role: "assistant",
      content:
        "Certainly! Let's consider the case of Green Valley School: Green Valley School successfully reduced its food waste by 40% within the first year of implementing a comprehensive food waste reduction program. They utilized a mobile app for meal pre-orders, installed smart bins for waste tracking, and partnered with FoodRescueHero, a food donation app, to distribute surplus meals. Educational workshops were conducted both in-person and through Zoom, making it accessible to more students. The school measured its success through the data collected from smart bins and the app, showcasing a significant decrease in waste. This case demonstrates the potential of combining technology, education, and community partnerships in effectively addressing food waste in schools.",
      condition:
        "The user requests the inclusion of a real-world example to illustrate the successful application of the discussed strategies in reducing food waste at a school.",
    },
  ],
};

export default dialogueData;
export const dialogueDataKeys = Object.keys(dialogueData) as Array<
  keyof typeof dialogueData
>;
export type DialogueDataKeys = (typeof dialogueDataKeys)[number];

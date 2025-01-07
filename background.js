const OPENAI_API_KEY = "your-api-key-here";

async function getGPTResponse(prompt) {
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 50
    })
  });

  const data = await response.json();
  return data.choices[0].text.trim().split("\n");
}

chrome.action.onClicked.addListener(async (tab) => {
  const generatedTexts = await getGPTResponse("Generate form-filling data:");

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: (texts) => {
      chrome.runtime.sendMessage({ action: "fill_form", data: texts });
    },
    args: [generatedTexts]
  });
});

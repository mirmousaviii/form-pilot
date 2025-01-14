async function getGPTResponse(prompt) {
  try {
    const apiKey = await new Promise((resolve, reject) => {
      chrome.storage.sync.get("openaiApiKey", (data) => {
        if (data.openaiApiKey) {
          resolve(data.openaiApiKey);
        } else {
          reject("API Key not found");
        }
      });
    });

    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 50
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].text.trim().split("\n");
  } catch (error) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon48.png",
      title: "FormPilot Error",
      message: error.message
    });
    throw error;
  }
}

chrome.action.onClicked.addListener(async (tab) => {
  try {
    const generatedTexts = await getGPTResponse("Generate form-filling data:");

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (texts) => {
        chrome.runtime.sendMessage({ action: "fill_form", data: texts });
      },
      args: [generatedTexts]
    });
  } catch (error) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon48.png",
      title: "FormPilot Error",
      message: error.message
    });
  }
});
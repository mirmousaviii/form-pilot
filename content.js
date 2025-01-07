console.log("FormPilot Loaded!");

function fillForm(fields) {
  const inputs = document.querySelectorAll("input, textarea, select");

  inputs.forEach((input, index) => {
    if (fields[index]) {
      if (input.tagName === "SELECT") {
        input.value = Array.from(input.options).some(option => option.value === fields[index])
          ? fields[index]
          : input.options[1]?.value || "";
      } else {
        input.value = fields[index];
      }
    }
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fill_form") {
    fillForm(request.data);
  }
});

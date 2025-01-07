document.getElementById("fillForm").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "fill_form" });
});

# FormPilot - Chrome Extension

FormPilot is a simple Chrome extension that automatically fills web forms using OpenAI's ChatGPT API. With a single click, it detects form fields and populates them with AI-generated data, making the form-filling process faster and more efficient.

## Features

- 🚀 **One-click form filling**: Automatically fills input fields, text areas, and dropdowns.
- 🤖 **AI-powered data generation**: Uses OpenAI's ChatGPT API to generate realistic form data.
- 🔍 **Smart field detection**: Identifies and fills forms on most websites.
- 🎯 **Easy to use**: No manual input required—just click and let the extension do the work.

## Installation

1. Clone this repository or download the source files.
2. Open **Google Chrome** and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the `FormPilot` folder.
5. The extension will be installed and ready to use.

## Usage

1. Navigate to a webpage containing a form.
2. Click on the **FormPilot icon** in the Chrome toolbar.
3. Watch as the form fields are automatically populated with AI-generated data!

## Configuration

- Update the `background.js` file with your OpenAI API key:

  ```javascript
  const OPENAI_API_KEY = "your-api-key-here";
  ```

- You can customize the prompt sent to ChatGPT to generate different types of form data.

## Files Overview

- `manifest.json` - Chrome extension manifest.
- `background.js` - Handles API requests and communication.
- `content.js` - Detects and fills form fields.
- `popup.html` / `popup.js` - User interface for triggering form fill actions.
- `icons/` - Extension icons.

## Future Enhancements

- ✅ Allow users to configure the type of data they want in forms.
- ✅ Store API keys securely instead of hardcoding them.
- ✅ Support multi-page and dynamic forms.
- ✅ Enhance AI-generated responses for more realistic input.

🔹 **Contributions & Suggestions Welcome!**

Feel free to submit issues or pull requests to improve FormPilot.

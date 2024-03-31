console.log("From Kadak service worker");

// chrome.webNavigation &&
//   chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId }) => {
//     const { options } = await chrome.storage.local.get("options");

//     console.log(options);

//     chrome.scripting.insertCSS({
//       target: { tabId },
//       files: ["invertColor.css"],
//     });

//     chrome.scripting.insertCSS({
//       target: { tabId },
//       files: ["dyslexicFont.css"],
//     });
//   });

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "sendParagraphs") {
    if (sender.tab) {
      // Get the current tab's document
      chrome.scripting
        .executeScript({
          target: { tabId: sender.tab.id! },
          func: () => {
            const paragraphs = Array.from(document.querySelectorAll("p")).map(
              (p) => p.textContent
            );
            return paragraphs;
          },
        })
        .then((results) => {
          const paragraphs = results[0].result;

          // Call the voice synthesis function for each paragraph
          paragraphs?.forEach((paragraph) => {
            paragraph && speakText(paragraph);
          });

          sendResponse({ status: "success" });
        })
        .catch((error) => {
          console.error(error);
          sendResponse({
            status: "error",
            message: "Failed to read paragraphs from tab",
          });
        });
    } else {
      sendResponse({ status: "error", message: "No tab available" });
    }
  }
});

// Voice synthesis function (unchanged)
function speakText(text: string) {
  const synth = new SpeechSynthesis();
  const utterThis = new SpeechSynthesisUtterance(text);

  // Set voice properties (you can adjust these as needed)
  utterThis.voice =
    synth.getVoices().find((voice) => voice.lang === "en-US") || null;
  utterThis.pitch = 1;
  utterThis.rate = 1;

  synth.speak(utterThis);
}

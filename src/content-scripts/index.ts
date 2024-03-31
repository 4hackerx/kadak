console.log("From Kadak content scripts");

// Send a message to the service worker to get the paragraphs
chrome.runtime.sendMessage({ action: "sendParagraphs" }, function (response) {
  if (response.status === "success") {
    console.log("Paragraphs sent successfully");
  } else {
    console.error(response.message);
  }
});

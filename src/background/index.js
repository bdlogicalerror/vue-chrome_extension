
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  console.log(sender);
  // Once we receive a message from the popup
   chrome.runtime.sendMessage({greeting: "hello from background"}, function(response) {
        console.log(response);
      });

});




// OnInstall handler
chrome.runtime.onInstalled.addListener(details => {
  console.log(details)
})

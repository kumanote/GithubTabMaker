(function() {
  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    var defaults = { isActive: true };
    chrome.storage.sync.get(
      defaults,
      function(items) {
        sendResponse(items);
      }
    );
  });
})();
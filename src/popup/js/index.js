$(function() {

  var switcher = $('.switch');
  var defaults = { isActive: true };
  chrome.storage.sync.get(
    defaults,
    function(items) {
      if (items.isActive) {
        switcher.text('OFF');
        chrome.browserAction.setIcon({path:"../../icons/icon_16.png"});
      } else {
        switcher.text('ON');
        chrome.browserAction.setIcon({path:"../../icons/icon_16_off.png"});
      }
    }
  );

  switcher.on('click', function() {
    $this = $(this);
    if ($this.text() == 'ON') {
      $this.text('OFF');
      chrome.storage.sync.set({ isActive: true }, function(){});
      chrome.browserAction.setIcon({path:"../../icons/icon_16.png"});
    } else {
      $this.text('ON');
      chrome.storage.sync.set({ isActive: false }, function(){});
      chrome.browserAction.setIcon({path:"../../icons/icon_16_off.png"});
    }
  });
});
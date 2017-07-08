(function() {
  $(document).ready(function() {
    chrome.extension.sendRequest({}, function(response) {
      if (!response.isActive) return;
      $(document).on('click', "a[href^='http']:not([href*='" + location.hostname + "'])", function() {
        $this = $(this);
        if ($this.attr('target')) return;
        $this.attr('target', '_blank');
        return true;
      });
    });
  });
})();
var blocked_domains = [
  "*://franecki.net/*",
  "*://mrelko.com/*",
  "*://semi-cod.com/*",
  "*://semi-cod.com/*",
  "*://jsc.traffic-media.co.uk/*",
  "*://z.cdn.trafficbass.com/*",
  "*://all-cod.com/*",
  // ads in youtube
  "*://*.youtube.com/api/stats/ads*",
  "*://*.youtube.com/get_video_info*",
  "*://*.doubleclick.net/*",
  "*://*.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
]; // Change this to a more specific pattern

var listener = function(details) {
  return { cancel: true };
};

chrome.storage.local.get('enabled', function(data) {
  if (data.enabled) {
    chrome.browserAction.setIcon({
      path: 'on.png'
    });
    chrome.webRequest.onBeforeRequest.addListener(
      listener,
      {urls: blocked_domains},
      ["blocking"]
    );
  } else {
    chrome.storage.local.set({enabled: false});
    chrome.browserAction.setIcon({
      path: 'off.png'
    });
    chrome.webRequest.onBeforeRequest.removeListener(listener);
  }
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.local.get('enabled', function(data) {
    if (data.enabled) {
      chrome.storage.local.set({enabled: false});

      chrome.browserAction.setIcon({
        path: 'off.png'
      });
      chrome.webRequest.onBeforeRequest.removeListener(listener);
    } else {
      chrome.storage.local.set({enabled: true});

      chrome.browserAction.setIcon({
        path: 'on.png'
      });

      chrome.webRequest.onBeforeRequest.addListener(
        listener,
        {urls: blocked_domains},
        ["blocking"]
      );
    }
    chrome.tabs.reload();
  })
});

chrome.webRequest.onBeforeRequest.addListener(
  function(){ return {cancel: true}; },
  {
    urls: [
      "*://franecki.net/*",
      "*://mrelko.com/*",
      "*://semi-cod.com/*",
      "*://semi-cod.com/*",
      "*://jsc.traffic-media.co.uk/*",
      "*://z.cdn.trafficbass.com/*",
      // ads in youtube
      "*://www.youtube.com/api/stats/ads?*",
      "*://*.doubleclick.net/*",
      "*://*.googleadservices.com/*",
      "*://*.googlesyndication.com/*",
    ], // Change this to a more specific pattern
  },
  ["blocking"]
);

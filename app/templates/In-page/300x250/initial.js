// Setup namespace for ad.
var creative = {};

creative.init = function () {
  creative.setupDOMElements();

  if (Enabler.isInitialized()) {
    creative.enablerInitHandler();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
       creative.enablerInitHandler);
   }
 };

creative.setupDOMElements = function () {
  creative.domElements = {};
  creative.domElements.cta = document.getElementById('cta');
};

creative.enablerInitHandler = function (event) {
  creative.domElements.cta.addEventListener('click', creative.exitClickHandler);

  // Hide preloader and show creative as soon as dynamic data is available and displayed. Currently we wait for
  // the external image in polite.js to be loaded. Change if you want your creative to display as quickly as possible.
  // creative.showAd();

  if (Enabler.isPageLoaded()) {
    creative.pageLoadHandler();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.PAGE_LOADED, creative.pageLoadHandler);
  }
};


creative.exitClickHandler = function (event) {
  Enabler.exit('<%= adExitName %>', 'http://google.com'); // change to reflect actual exit url
};

creative.pageLoadHandler = function (event) {
  var external_css;
  var external_javascript;

  // Load in Javascript.
  external_javascript = document.createElement('script');
  external_javascript.setAttribute('type', 'text/javascript');
  external_javascript.setAttribute('src', Enabler.getUrl('polite.js')); // Name of your Javascript file.
  document.getElementsByTagName('head')[0].appendChild(external_javascript);

  // Load in CSS.
  external_css = document.createElement('link');
  external_css.setAttribute('rel', 'stylesheet');
  external_css.setAttribute('type', 'text/css');
  external_css.setAttribute('href', Enabler.getUrl('polite.css')); // Name of your CSS file.
  document.getElementsByTagName('head')[0].appendChild(external_css);
};

// Is triggered when the background image in polite.js was fully loaded.
creative.showAd = function () {
  // Show content.
  document.getElementById('content').className = "show vcenter-inner";
  // Hide loader.
  document.getElementById('loader').className = "hide";
};

// Start creative once all elements in window are loaded.
window.addEventListener('load', creative.init.bind(creative));

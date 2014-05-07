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
  creative.domElements.background = document.getElementById('background');
  creative.domElements.headline = document.getElementById('headline');
  creative.domElements.subline = document.getElementById('subline');
  creative.domElements.cta = document.getElementById('cta');
};

creative.enablerInitHandler = function (event) {

  creative.dynamicDataAvailable();

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

creative.dynamicDataAvailable = function () {

  // NOTE: Here starts the pasted section from Studio.

  // Dynamic Content variables and sample values
  Enabler.setProfileId(1021953);
  var devDynamicContent = {};

  devDynamicContent.Travel_Packaged_Solutions_AB = [{}];
  devDynamicContent.Travel_Packaged_Solutions_AB[0]._id = 0;
  devDynamicContent.Travel_Packaged_Solutions_AB[0].id = 1;
  devDynamicContent.Travel_Packaged_Solutions_AB[0].reporting_label = "Upper Funnel - Stress";
  devDynamicContent.Travel_Packaged_Solutions_AB[0].headline_text = "Needing a break<br>from work?";
  devDynamicContent.Travel_Packaged_Solutions_AB[0].subline_text = "Explore our new first class cabins!";
  devDynamicContent.Travel_Packaged_Solutions_AB[0].subline_color = "ffffff";
  devDynamicContent.Travel_Packaged_Solutions_AB[0].background_image_url = {};
  devDynamicContent.Travel_Packaged_Solutions_AB[0].background_image_url.Url = "http://storage.googleapis.com/mps-storage/dynamicPackages/ab/ab_firstclass.png";
  devDynamicContent.Travel_Packaged_Solutions_AB[0].cta_text = "GET SET & JET";
  devDynamicContent.Travel_Packaged_Solutions_AB[0].cta_color = "993a2f";
  devDynamicContent.Travel_Packaged_Solutions_AB[0].exit_url = {};
  devDynamicContent.Travel_Packaged_Solutions_AB[0].exit_url.Url = "http://www.google.com";
  Enabler.setDevDynamicContent(devDynamicContent);

  // NOTE: Here ends the pasted section from Studio.

  // Variable "dynamicContent" gets automatically initialized by Enabler.
  // Change "Travel_Packaged_Solutions_AB" to the name of your dynamic elements.
  creative.dynamicData = dynamicContent.Travel_Packaged_Solutions_AB[0];

  // Set your dynamic exit url so it can be used in initial.js.
  creative.dynamicExitUrl = creative.dynamicData.exit_url.Url;

  creative.domElements.headline.innerHTML = creative.dynamicData.headline_text;

  creative.domElements.subline.innerHTML = creative.dynamicData.subline_text;
  creative.domElements.subline.style.color = "#" + creative.dynamicData.subline_color;

  creative.domElements.cta.style.backgroundColor = "#" + creative.dynamicData.cta_color;
  creative.domElements.cta.innerHTML = creative.dynamicData.cta_text;
};


creative.exitClickHandler = function (event) {
  Enabler.exit('<%= adExitName %>', creative.dynamicExitUrl);
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
  document.getElementById('content').className = "show";
  // Hide loader.
  document.getElementById('loader').className = "hide";
};

// Start creative once all elements in window are loaded.
window.addEventListener('load', creative.init.bind(creative));

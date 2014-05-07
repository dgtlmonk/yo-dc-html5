// Copyright 2013 Google Inc. All Rights Reserved.

var dcrm = dcrm || {};


/**
 * Setups the references to DOM objects.
 */
dcrm.variablesSetup = function() {
  // Footer
  dcrm.colContainer = document.getElementById('collapse-container');
  dcrm.colContent = document.getElementById('collapse-content');
  dcrm.colExit = document.getElementById('collapse-background-exit');
  dcrm.colClose = document.getElementById('collapse-close-button');
  dcrm.colExit.addEventListener('click', dcrm.collapsedClick, false);
  dcrm.colClose.addEventListener('click', dcrm.closeHandler, false);
};

/**
 * Sends a message to the survey URL JS file in the hosting page.
 * @param {string} message Message to be sent.
 */
dcrm.sendMessageToParent = function(message) {
  var jsonMessage = { action: message, adId: Enabler.getDartAssetId(),
    creativeId: Enabler.getDartCreativeId() };
  window.parent.postMessage(JSON.stringify(jsonMessage), '*');
};

dcrm.collapsedClick = function(event) {
  Enabler.exit('<%= adExitName %>');
}

dcrm.closeHandler = function(event) {
  Enabler.reportManualClose();
  Enabler.close();
}


/**
 * Initializes all the relevant objects and listeners, and sends a message to
 * the JS in the hosting page for the footer to be correctly positioned.
 */
dcrm.init = function() {
  Enabler.setFloatingPixelDimensions(320,50);
  dcrm.variablesSetup();
  dcrm.sendMessageToParent('setup');
};


/**
 * Waits for the page to load (and for the Enabler to be initialized) before
 * proceeding to call dcrm.init().
 */
window.onload = function() {
  if (Enabler.isInitialized()) {
    dcrm.init();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, dcrm.init);
  }
};

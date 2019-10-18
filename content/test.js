/* global Components document*/

'use strict';

Components.utils.import('resource://gre/modules/Preferences.jsm');
const prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);

// Empty current menu
const popup = document.getElementById('menu_HelpPopup');
const separators = popup.querySelectorAll('menuseparator');
const items = popup.querySelectorAll('menuitem:not(.testextension)');
[...items, ...separators].forEach((item) => { item.parentNode.removeChild(item); });

// Reference to elements I added
const custom = popup.querySelectorAll('.testextension');

function updateMenu(){
  popup.querySelectorAll('.testextension').forEach(
    (item) => { item.parentNode.removeChild(item); }
  );

  if (prefs.getBoolPref('extensions.testextension.greet')) popup.appendChild(custom[0]);
  if (prefs.getBoolPref('extensions.testextension.love')) popup.appendChild(custom[1]);
  if (prefs.getBoolPref('extensions.testextension.cats')) popup.appendChild(custom[2]);

  if (popup.childNodes.length === 0) popup.appendChild(custom[3]);
}

// React to change in preferences
const myPrefObserver = {
  register() {
    const prefService = Components.classes['@mozilla.org/preferences-service;1']
                                .getService(Components.interfaces.nsIPrefService);

    this.branch = prefService.getBranch('extensions.testextension.');

    if (!('addObserver' in this.branch)){
      this.branch.QueryInterface(Components.interfaces.nsIPrefBranch2);
    }

    this.branch.addObserver('', this, false);
  },

  unregister() {
    this.branch.removeObserver('', this);
  },

  observe() {
    updateMenu();
  }
};

// Kick it all off
myPrefObserver.register();
updateMenu();

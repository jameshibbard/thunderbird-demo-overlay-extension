/* globals document */

var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

var preferences = [
  { id: "extensions.testextension.greet", type: "bool" },
  { id: "extensions.testextension.love", type: "bool" },
  { id: "extensions.testextension.cats", type: "bool" },
];

var branchName = 'extensions.testextension.';
var branchNameLength = branchName.length;
var branch = Services.prefs.getBranch(branchName);

function load() {
  for (let pref of preferences) {
    let element = document.getElementById(pref.id);
    let prefName = pref.id.substring(branchNameLength);

    switch (pref.type) {
      case "int":
        element.value = branch.getIntPref(prefName);
        break;

      case "bool":
      console.log(branch.getBoolPref(prefName));
        element.setAttribute("checked", branch.getBoolPref(prefName) ? "true" : "false");
        break;

      case "string":
        element.value = branch.getCharPref(prefName);
        break;
    }
  }
  document.addEventListener("dialogaccept", save);
}

function save() {
  for (let pref of preferences) {
    let element = document.getElementById(pref.id);
    let prefName = pref.id.substring(branchNameLength);

    switch (pref.type) {
      case "int":
        branch.setIntPref(prefName, element.value);
        break;

      case "bool":
        branch.setBoolPref(prefName, element.getAttribute("checked") == "true");
        break;

      case "string":
        branch.setCharPref(prefName, element.value);
        break;
    }
  }
}

/* globals MozXULElement customElements*/

"use strict";

// This is loaded into all XUL windows.
// Wrap in a block to prevent leaking to window scope.
{
  class MozHelpMenu extends MozXULElement {
    connectedCallback() {
      this.appendChild(MozXULElement.parseXULToFragment(`
        <menuitem id="test" label="Hello, World!" oncommand="alert('Hello, World!')" />
      `));
    }
  }

  customElements.define('help-menu', MozHelpMenu);
}

# Demo Thunderbird Overlay Extension

This extension uses XBL to alter the behaviour of the _Help_ menu item in Thunderbird’s menu bar, replacing its original menu items with a single "Hello, World!" menu item.

Using the `moz-binding` CSS property, the extension applies the binding to:

```xml
<!-- Help -->
<menu id="helpMenu" label="&helpMenu.label;" accesskey="&helpMenu.accesskey;">
  ...
</menu>
```

which is found on line 3029 of `omi.ja/chrome/messenger/content/messenger/mailWindowOverlay.xul`.

## Install

Requires Thunderbird 60.

- Clone the repo
- Thunderbird > _Tools_ > _Add-ons_
- Select _Install add-on from file_ from dropdown
- Select `test.xpi` from repo

## Build

- Zip up the contents of the repo, excluding the `.git` folder, the `test.xpi` file and the `README.md`. E.g. `zip -r test.xpi * -x ".git" -x "README.md" -x "test.xpi"`

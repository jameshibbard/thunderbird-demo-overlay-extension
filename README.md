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

Requires Thunderbird 68.

- Clone the repo
- In Thunderbird select _Tools_ > _Add-ons_
- Select _Debug Add-ons_ from dropdown
- Click _Load Temproray Add-on..._
- Select `manifest.json` from repo

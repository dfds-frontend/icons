# DFDS icons

Unofficial library for DFDS

## main icons from CDN

### Quick guide

inlude this in html

```html
<script src="https://unpkg.com/@dfds-frontend/icons/dist/core/icons.js"></script>
```

use the icons in the html

```html
<svg fill="red" width="4rem" height="4rem">
  <use xlink:href="#icon-Burger-Menu"></use>
</svg>
```

### Available icons

- https://unpkg.com/@dfds-frontend/icons/dist/core/icons.js
- https://unpkg.com/@dfds-frontend/icons/dist/flags/icons.js
- https://unpkg.com/@dfds-frontend/icons/dist/passengers/icons.js
- https://unpkg.com/@dfds-frontend/icons/dist/freight-logistics/icons.js
- https://unpkg.com/@dfds-frontend/icons/dist/social-media/icons.js
- https://unpkg.com/@dfds-frontend/icons/dist/links/icons.js

### manual load

To load the icons manully apply this css class either to html or body element
`dfds-main-icons-manual-load`

```html
<body class="dfds-main-icons-manual-load"></body>
```

Then use this method after the `icons.js` has been loaded

```javascript
_DFDS_.icons.core.load();
```

You can specify a download path for the SVG file and a callback when SVG has been downloaded.

```javascript
_DFDS_.icons.core.load({
  path: "url-path-to-svg-file",
  callback: function(ajaxResult) {}
});
```

## icons from npm

- npm install @dfds-frontend/icons
- the files are in node_modules/@dfds-frontend/icons

inlude this in html

```html
<script src="node_modules/@dfds-frontend/icons/dist/core/icons.js"></script>
```

or

```javascript
import icons from "@dfds-frontend/icons";
icons.load();
```

## demo

- https://codepen.io/kunukn/full/32d44d925a777a4e0d03887f57cbb410 Vanilla JS, core icons
- https://codepen.io/kunukn/full/3284cab7dec4b27b92d895eb61cbbba6 Vanilla JS, all icons
- https://codepen.io/kunukn/pen/c7080494f3fbd5b1c387353d81bebb36 Html
- https://codesandbox.io/s/935w7p22xy Html
- https://codesandbox.io/s/lp8oymr4xq React

## more

To see all the available CDN files go to

https://unpkg.com/@dfds-frontend/icons/

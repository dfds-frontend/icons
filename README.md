# DFDS icons

Unofficial library for DFDS

## icons from CDN

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

## demo

32x32 sized icons

- https://codepen.io/kunukn/full/32d44d925a777a4e0d03887f57cbb410 core icons
- https://codepen.io/kunukn/full/ba90afb38f953d31fe3f8918391fa554 freight logistic icons
- https://codepen.io/kunukn/full/a2256b33d1aeda62ca3cfca37374ae15 flag icons
- https://codepen.io/kunukn/full/5c68493ce90b67546e2b95b6b5fd9229 link icons
- https://codepen.io/kunukn/full/c15f797d9552a4d5b022c5ae4e87ea9a passenger icons
- https://codepen.io/kunukn/full/041050033f722385fa77af940815377a social media icons

Legacy demo

- https://codepen.io/kunukn/full/3284cab7dec4b27b92d895eb61cbbba6 all main icons
- https://codepen.io/kunukn/pen/c7080494f3fbd5b1c387353d81bebb36 Html
- https://codesandbox.io/s/935w7p22xy Html
- https://codesandbox.io/s/lp8oymr4xq React

### manual load

To load the icons manully apply one of this css class toes html element
`dfds-icons-manual-load` or `dfds-core-icons-manual-load`

```html
<html class="dfds-icons-manual-load"></html>
```

Then use this method after the `icons.js` has been loaded

```javascript
_DFDS_.icons.core();
```

You can specify a download path for the SVG file and a callback when SVG has been downloaded.

```javascript
_DFDS_.icons.core({
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
icons();
```

### Available icons

- @dfds-frontend/icons/dist/core/icons.js
- @dfds-frontend/icons/dist/flags/icons.js
- @dfds-frontend/icons/dist/passengers/icons.js
- @dfds-frontend/icons/dist/freight-logistics/icons.js
- @dfds-frontend/icons/dist/social-media/icons.js
- @dfds-frontend/icons/dist/links/icons.js

## more

To see all the available CDN files go to

https://unpkg.com/@dfds-frontend/icons/

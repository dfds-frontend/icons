# DFDS icons

## main icons from CDN

inlude this in html

```html
<script
  src="https://unpkg.com/@kunukn/dfds-icons/files/main/icons.js">
</script>
```

use the icons in the html

```html
<svg fill="red" width="4rem" height="4rem">
  <use xlink:href="#external-link"></use>
</svg>
```

To load the icons manully apply this css class either to html or body element
`dfds-main-icons-manual-load`

```html
<body class="dfds-main-icons-manual-load">
</body>
```

Then use this method after the `icons.js` has been loaded

```javascript
_DFDS_.icons.load();
```

You can specify a download path for the SVG file and a callback when SVG has been downloaded.

```javascript
_DFDS_.icons.load({
	path: "to-svg-file",
	callback: function(ajaxResult) {}
});
```

## main icons from npm

-   npm install @kunukn/dfds-icons
-   the files are in node_modules/@kunukn/dfds-icons/files

inlude this in html

```html
<script
  src="node_modules/@kunukn/dfds-icons/files/main/icons.js">
</script>
```

or

```javascript
import icons from "@kunukn/dfds-icons";
icons.load();
```

## demo

-   https://codepen.io/kunukn/full/94325628e7a2c18119cd01df62676ccb Vanilla JS, all icons
-   https://codepen.io/kunukn/pen/e17703413428ee227a748d4d128f4d10 Html
-   https://codesandbox.io/s/lr2ozlllpl Html
-   https://codesandbox.io/s/pyjrr5xz87 React

## url shortened link alternative

```html
<script src="https://bit.do/dfds-icons"></script>
```

## more

To see all the available CDN files go to

https://unpkg.com/@kunukn/dfds-icons/

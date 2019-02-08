var UglifyJS = require("uglify-js");
var fs = require("fs");

var options = {
    mangle: {
        properties: true,
    },
    compress: {
        drop_console: true,
      },
      output: {
        comments: false,
      },
    
};

var files = [
  "dist/core/icons.js",
  "dist/flags/icons.js",
  "dist/freight-logistics/icons.js",
  "dist/links/icons.js",
  "dist/passengers/icons.js",
  "dist/social-media/icons.js"
];

function callback(arg){console.log(arg)};
var i;
for(i = 0; i<files.length; i++){
  var path = files[i];
  var code = fs.readFileSync(path, "utf8");
  var result = UglifyJS.minify(code, options).code;
  fs.writeFile(path, result, "utf8", callback);
}


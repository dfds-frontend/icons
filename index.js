function icons(){};

function load(props) {
  var path = props && props.path;
  var callback = props && props.callback;

  var ajax = new XMLHttpRequest();
  ajax.onload = function (e) {
    if (ajax.status === 200) {
      var div = document.createElement("div");
      div.style.display = 'none';
      div.className = 'svg-in-the-dom';
      div.innerHTML = ajax.responseText;
      document
        .body
        .insertBefore(div, document.body.childNodes[0]);
    }
    callback && callback(ajax);
  }
  ajax.open("GET", path || "https://unpkg.com/@dfds-frontend/icons/main/icons.svg", true);
  ajax.send();
};

icons = load;
icons.load = load;

module.exports = icons;

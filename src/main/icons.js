var _DFDS_ = _DFDS_ || {};
_DFDS_.icons = _DFDS_.icons || {};

_DFDS_.icons.main = (function () {

  var id = 'dfds-icons-main-svg-in-the-dom';

  function load(props) {
    var path = props && props.path;
    var callback = props && props.callback;

    var ajax = new XMLHttpRequest();
    ajax.onload = function (e) {
      if (ajax.status === 200) {
        var div = document.createElement("div");
        div.style.display = 'none';
        div.className = 'dfds-svg-in-the-dom';
        div.innerHTML = ajax.responseText;
        document
          .body
          .insertBefore(div, document.body.childNodes[0]);
      }
      callback && callback(ajax);
    }
    ajax.open("GET", path || "https://unpkg.com/@dfds-frontend/icons/dist/main/icons.svg", true);
    ajax.send();
  };

  try {

    var css = 'dfds-icons-manual-load';
    var html = document.documentElement;
    if (!document.getElementById(id) && !(html.classList.contains('dfds-main-icons-manual-load') || html.classList.contains(css) )) {
      load();
    }
  } catch(err) {}

  function icons(){}

  icons = load;
  icons.load = icons;

  return icons;

})();

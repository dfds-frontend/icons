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
    ajax.open("GET", path || "https://unpkg.com/@dfds-frontend/icons/iconMain/icons.svg", true);
    ajax.send();
  };

  try {

    if (!document.getElementById(id) && !document.body.classList.contains('dfds-main-icons-manual-load')) {
      load();
    }
  } catch(err) {}

  function icons(){}

  icons = load;
  icons.load = icons;

  return icons;

})();
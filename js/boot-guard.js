(function () {
  function isExtensionNoise(msg, src, line, col) {
    if (src && (src.indexOf('chrome-extension://') > -1 || src.indexOf('moz-extension://') > -1)) return true;
    if (msg === 'Unexpected end of input' && line === 1 && col <= 30) {
      if (!src || src.indexOf('phrases') > -1) return true;
    }
    return false;
  }

  window.addEventListener('error', function (e) {
    if (isExtensionNoise(e.message, e.filename, e.lineno, e.colno)) {
      e.preventDefault();
      return true;
    }
  }, true);

  var prev = window.onerror;
  window.onerror = function (msg, src, line, col, err) {
    if (isExtensionNoise(msg, src, line, col)) return true;
    if (prev) return prev.apply(this, arguments);
    return false;
  };
}());

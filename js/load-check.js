(function () {
  var current = document.currentScript;
  var bundleFile = current && current.getAttribute('data-bundle')
    ? current.getAttribute('data-bundle')
    : 'app.v20.js';

  setTimeout(function () {
    if (typeof PHRASES !== 'undefined') return;

    var el = document.getElementById('load-error');
    if (!el) return;

    el.style.display = 'block';
    el.innerHTML = '<h2>Не вдалось завантажити</h2><p>Файл ' + bundleFile + ' не знайдено. Запустіть: node build-bundle.js</p>';
  }, 1500);
}());

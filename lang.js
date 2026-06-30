// kedo legal pages — EN/TR language toggle
function kedoSetLang(l) {
  l = (l === 'tr') ? 'tr' : 'en';
  document.body.classList.remove('lang-en', 'lang-tr');
  document.body.classList.add('lang-' + l);
  var btns = document.querySelectorAll('.langtoggle button');
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.toggle('active', btns[i].getAttribute('data-lang') === l);
  }
  try { localStorage.setItem('kedo_lang', l); } catch (e) {}
}
(function () {
  var l = 'en';
  try {
    l = localStorage.getItem('kedo_lang');
    if (!l) l = ((navigator.language || '').toLowerCase().indexOf('tr') === 0) ? 'tr' : 'en';
  } catch (e) {}
  document.addEventListener('DOMContentLoaded', function () { kedoSetLang(l); });
})();

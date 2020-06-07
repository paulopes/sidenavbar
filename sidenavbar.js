/*!
 * sidenavbar 0.0.3
 *
 * @link https://github.com/paulopes/sidenavbar/blob/master/README.md
 * @source https://github.com/paulopes/sidenavbar
 * @copyright (c) 2020 Paulo Lopes
 * @license Apache License 2.0
 * https://github.com/paulopes/sidenavbar/blob/master/LICENSE
 */
(function () {
  function clickBehindHandler() {
    if (document.body.classList.contains('sidenavbar-active')) {
      document.body.classList.remove('sidenavbar-active');
    }
  }

  function clickButtonHandler() {
    if (document.body.classList.contains('sidenavbar-active')) {
      document.body.classList.remove('sidenavbar-active');
    } else {
      document.body.classList.add('sidenavbar-active');
    }
  }

  function windowHandler() {
    document.body.querySelectorAll('.navbar').forEach(function (el) {
      var sidenavbarbutton = document.createElement('div');
      sidenavbarbutton.classList.add('sidenavbar-button');

      var sidenavbarbuttontop = document.createElement('div');
      sidenavbarbuttontop.classList.add('sidenavbar-button-top');
      sidenavbarbutton.appendChild(sidenavbarbuttontop);
      var sidenavbarbuttonmid = document.createElement('div');
      sidenavbarbuttonmid.classList.add('sidenavbar-button-mid');
      sidenavbarbutton.appendChild(sidenavbarbuttonmid);
      var sidenavbarbuttonbottom = document.createElement('div');
      sidenavbarbuttonbottom.classList.add('sidenavbar-button-bottom');
      sidenavbarbutton.appendChild(sidenavbarbuttonbottom);

      el.appendChild(sidenavbarbutton);
      sidenavbarbutton.addEventListener('click', clickButtonHandler);
    });
  }

  function documentHandler() {
    var sidenavbarbehind = document.createElement('div');
    sidenavbarbehind.setAttribute('id', 'sidenavbarbehind');
    document.body.appendChild(sidenavbarbehind);
    sidenavbarbehind.addEventListener('click', clickBehindHandler);

    window.addEventListener('DOMContentLoaded', windowHandler, false);
  }

  document.addEventListener('DOMContentLoaded', documentHandler);
})();

var domready = require('domready');

var resize = function () {
  var nav = document.querySelector('nav');
  var navHeight = nav.clientHeight;
  var page = document.querySelector('main.page');
  var pageStyle = page.style;

  if (page.className.split(' ').indexOf('multimedia') !== -1) {
    navHeight += 5;
  }

  pageStyle['margin-top'] = navHeight + "px";
};

domready(resize);
window.onresize = resize;

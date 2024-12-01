/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/


// Inicjalizacja stanu aplikacji
var appState = {
  currentStyleName: 'default',
  currentStyleFile: 'styles/page1.css',
  availableStyles: {
    'Styl1': 'styles/page1.css',
    'Styl2': 'styles/page2.css',
    'Styl3': 'styles/page3.css',
    'Styl4': 'styles/page4.css'
  }
};
// zmiana stylu
function changeStyle(styleName) {
  var styleFile = appState.availableStyles[styleName]; // zapisanie stylu
  var linkElement = document.getElementById('stylesheet');
  linkElement.href = styleFile;
  appState.currentStyleName = styleName;
  appState.currentStyleFile = styleFile;
}
// Dodanie przycisków do menu
document.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.menu');
  Object.keys(appState.availableStyles).forEach(function (styleName) {
    var link = document.createElement('a');
    link.textContent = styleName;
    link.href = '#';
    link.onclick = function (event) {
      event.preventDefault(); // zapobieganie domyślnej akcji 
      changeStyle(styleName);
    };
    // @ts-ignore
    menu.appendChild(link);
  });
});
/******/ })()
;
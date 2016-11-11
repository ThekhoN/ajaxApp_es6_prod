'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var domLog = function domLog() {
    (function () {
        var old = console.log;
        var logger = document.getElementById('errorLog1');
        console.log = function (message) {
            if ((typeof message === 'undefined' ? 'undefined' : _typeof(message)) == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
            } else {
                logger.innerHTML += message + '<br />';
            }
        };
    })();
};
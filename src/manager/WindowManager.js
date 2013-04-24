;(function(win, doc, a) {
'use strict';

a.manager || (a.manager = {});

var singleton = a.utility.singleton,
    EventDispatcher = a.event.EventDispatcher;

function WindowManager() {
    EventDispatcher.apply(this, arguments);

    var rect = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };

    function init() {

    }
}
WindowManager.prototype = new EventDispatcher();

a.manager.WindowManager = singleton(WindowManager);
}(window, document, app));
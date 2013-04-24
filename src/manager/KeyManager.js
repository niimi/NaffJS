;(function(win, doc, a) {
'use strict';

var manager = a.manager || (a.manager = {});

var singleton = a.utility.singleton,
    EventDispatcher = a.event.EventDispatcher;

function KeyManager() {
    EventDispatcher.apply(this, arguments);
    doc.addEventListener('keydown', keydownListener, false);
    
    var self = this;
    function keydownListener(e) {
        self.dispatchEvent('keydown', e.keyCode);
    }
}
KeyManager.prototype = new EventDispatcher();

manager.KeyManager = singleton(KeyManager);
}(window, document, app));
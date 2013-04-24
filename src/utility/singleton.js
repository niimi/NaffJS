;(function(win, doc, a) {
'use strict';

var utility =  a.utility || (a.utility = {});

function singleton(Ctor) {
    var instance,
        ret = {
            getInstance: getInstance
        };

    function getInstance() {
        if (!instance) {
            instance = new Ctor();
            Ctor = null;
        }
        return instance;
    }
    return ret;
}

utility.singleton = singleton;
}(window, document, app));
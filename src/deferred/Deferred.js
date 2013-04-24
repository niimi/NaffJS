;(function(win, doc, a) {
'use strict';

var deferred = a.deferred || (a.deferred = {});

function Deferred() {
    var resolveQueue = [],
        rejectQueue = [],
        resolved = false,
        rejected = false;

    function done(func) {
        resolveQueue.push(func);
        if(resolved) {
            resolve(arguments);
        }
        return this;
    }

    function fail(func) {
        rejectQueue.push(func);
        if(rejected) {
            reject(arguments);
        }
        return this;
    }

    function resolve() {
        var len = resolveQueue.length,
            i = 0;
        
        resolved = true;
        for(; i < len; i ++) {
            resolveQueue[i](arguments);
        }
    }

    function reject() {
        var len = rejectQueue.length,
            i = 0;

        rejected = true;
        for(; i < len; i ++) {
            rejectQueue[i](arguments);
        }
    }

    return {
        done: done,
        fail: fail,
        resolve: resolve,
        reject: reject
    };
}

deferred.Deferred = Deferred;
})(window, document, app);
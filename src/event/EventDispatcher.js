(function(win, doc, a) {
'use strict';

a.event || (a.event = {});

function EventDispatcher() {
    this.handles = [];
}

EventDispatcher.prototype.addEvent = function (key, func) {
    var i = this.handles.length;

    while (i --) {
        if (this.handles[i].key === key) {
            this.handles[i].funcs.push(func);
            return;
        }
    }
    this.handles.push({key: key, funcs: [func]});
};

EventDispatcher.prototype.removeEvent = function (key, func) {
    var i = this.handles.length;

    while (i --) {
        if (this.handles[i].key === key) {
            var j = this.handles[i].funcs.length;
            while (j --) {
                if (this.handles[i].funcs[j] === func) {
                    this.handles[i].funcs.splice(j, 1);
                }
            }
            if (this.handles[i].funcs === []) {
                this.handles.splice(i, 1);
            }
        }
    }
};

EventDispatcher.prototype.dispatchEvent = function(key, arg) {

    var copy = this.handles.concat(),
        len_i = this.handles.length,
        i = 0;

    while (i < len_i) {
        if (copy[i].key === key) {

            var copyFuncs = copy[i].funcs.concat(),
                len_j = copy[i].funcs.length,
                j = 0;

            while (j < len_j) {
                try {
                copyFuncs[j](this, arg);
                j++;
                } catch (e) {
                    debugger;
                }
            }
        }
        i++;
    }
};

a.event.EventDispatcher = EventDispatcher;
})(window, document, app);


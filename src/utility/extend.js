;(function(win, doc, a) {
'use strict';

var utility =  a.utility || (a.utility = {});

function extend(Sub, Super) {
    var _ = function() {};
    _.prototype = Super.prototype;
    _.prototype._super = Super.prototype;
    Sub.prototype = new _;

    return Sub;
}

utility.extend = extend;
}(window, document, app));
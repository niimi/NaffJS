;(function(win, doc, a) {
'use strict';

var utility = a.utility || (a.utility = {});

//in t * t:
//out - (t-1) * (t-1) + 1
//in out (t < 0.5) ? t -> 2t
//       (0.5 <= t) ? t -> 2(t-1)

var easing = {
    easeInQuad: function (t) {
        return t*t;
    },
    easeOutQuad: function (t) {
        return -(t-1)*(t-1) + 1;
        // return -t*t + 2*t;
    },
    easeInOutQuad: function (t) {
        if (t < 1/2) return 2*t*t;
        return -2*(t-1)*(t-1) + 1;
        // return 2*(-t*t + 2*t) - 1;
    },
    easeInCubic: function (t) {
        return t*t*t;
    },
    easeOutCubic: function (t) {
        return (t-1)*(t-1)*(t-1) + 1;
    },
    easeInOutCubic: function (t) {
        if (t < 1/2) return 4*t*t*t;
        return 4*(t-1)*(t-1)*(t-1) + 1;
    },
    easeInQuart: function (t) {
        return t*t*t*t;
    },
    easeOutQuart: function (t) {
        return -(t-1)*(t-1)*(t-1)*(t-1) + 1;
    },
    easeInOutQuart: function (t) {
        if (t < 1/2) return 8*t*t*t*t;
        return -8*(t-1)*(t-1)*(t-1)*(t-1) + 1;
    },
    easeInQuint: function (t) {
        return t*t*t*t*t;
    },
    easeOutQuint: function (t) {
        return (t-1)*(t-1)*(t-1)*(t-1)*(t-1) + 1;
    },
    easeInOutQuint: function (t) {
        if (t < 1/2) return 16*t*t*t*t*t;
        return 16*(t-1)*(t-1)*(t-1)*(t-1)*(t-1) + 1;
    },
    easeInSine: function (t) {
        return - Math.cos(t * (Math.PI/2)) + 1;
    },
    easeOutSine: function (t) {
        return Math.sin(t * (Math.PI/2));
    },
    easeInOutSine: function (t) {
        return -1/2 * (Math.cos(Math.PI*t) - 1);
    },
    easeInExpo: function (t) {
        return (t===0) ? 0 : Math.pow(2, 10 * (t - 1));
    },
    easeOutExpo: function (t) {
        return (t===0) ? 1 : - Math.pow(2, -10 * t) + 1;
    },
    easeInOutExpo: function (t) {
        if (t===0) return 0;
        if (t===1) return 1;
        // if (t < 1/2) return 16 * Math.pow(2, 10 * (t - 1));
        // return 16 * (-Math.pow(2, -10 * t) + 1);

        if (t < 1/2) return 1/2 * Math.pow(2, 10 * ((t*2) - 1));
        return (- Math.pow(2, -10 * (2*t-1)) + 1)*1/2 + 1/2;
    },
    easeInCirc: function (t) {
        return - Math.sqrt(1 - t*t) + 1;
    },
    easeOutCirc: function (t) {
        return Math.sqrt(1 - (t-1)*(t-1));
    },
    easeInOutCirc: function (t) {
        if (t < 1/2) return 1/2 * (- Math.sqrt(1 - 4*t*t) + 1);
        return 1/2 * (Math.sqrt(1 - ((2*t-1)-1)*((2*t-1)-1))) + 1/2;
    },
    easeInElastic: function (t) {
        var s=1.70158, p=0, a=1;
        if (t===0) return 0; if (t===1) return 1; if (!p) p=0.3;
        if (a < 1) {a=1; s=p/4;}
        else s = p/(2*Math.PI) * Math.asin(1/a);
        return -(a*Math.pow(2,10*(t-1)) * Math.sin((t-1-s)*(2*Math.PI)/p));
    },
    easeOutElastic: function (t) {
        var s=1.70158, p=0, a=1;
        if (t===0) return 0; if (t===1) return 1; if (!p) p=0.3;
        if (a < 1) {a=1; s=p/4;}
        else s = p/(2*Math.PI) * Math.asin(1/a);
        return a*Math.pow(2,-10*t) * Math.sin((t-s)*(2*Math.PI)/p) + 1;
    },
    easeInOutElastic: function (t) {
        var s=1.70158, p=0, a=1;
        if (t===0) return 0; if (t===1) return 1; if (!p) p=0.45;
        if (a < 1) {a=1; s=p/4;}
        else s = p/(2*Math.PI) * Math.asin(1/a);
        if (t < 0.5) return -0.5*(a*Math.pow(2,10*(2*t-1)) * Math.sin((2*t-1-s)*(2*Math.PI)/p));
        return 0.5*(a*Math.pow(2,-10*(2*t-1)) * Math.sin(((2*t-1)-s)*(2*Math.PI)/p) + 1) + 0.5;
    },
    easeInBack: function (t) {
        var s = 1.70158;
        return t*t*((s+1)*t - s);
    },
    easeOutBack: function (t) {
        var s = 1.70158;
        return (t-1)*(t-1)*((s+1)*(t-1) + s) + 1;
    },
    easeInOutBack: function (t) {
        var s = 1.70158;
        if (t < 1/2) return 2*t*t*((s+1)*(t*2) - s);
        return 2*(t-1)*(t-1)*((s+1)*(2*t-2) + s) + 1;
    },
    easeInBounce: function (t) {
        return 1 - easing.easeOutBounce(1-t);
    },
    easeOutBounce: function (t) {
        if (t < 1/2.75) {
            return 7.5625*t*t;
        } else if (t < 2/2.75) {
            return 7.5625*(t-1.5/2.75)*(t-1.5/2.75) + 0.75;
        } else if (t < 2.5/2.75) {
            return 7.5625*(t-2.25/2.75)*(t-2.25/2.75) + 0.9375;
        } else {
            return 7.5625*(t-2.625/2.75)*(t-2.625/2.75) + 0.984375;
        }
    },
    easeInOutBounce: function (t) {
        if (t < 1/2) return 1/2 * easing.easeInBounce (t*2);
        return 1/2*easing.easeOutBounce(2*t-1) + 1/2;
    }
};
utility.easing = easing;
})(window, document, app);
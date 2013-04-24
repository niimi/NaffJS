;(function(win, doc, a) {
    "use strict";

a.event || (a.event = {});

function Event(type) {
    this.type = type;
}

var hasTouchEvent = ('ontouchstart' in win);
Event.DOWN  = (hasTouchEvent) ? 'touchstart' : 'mousedown';
Event.MOVE  = (hasTouchEvent) ? 'touchmove'  : 'mousemove';
Event.UP    = (hasTouchEvent) ? 'touchend'   : 'mouseup';

Event.MOUSE_OVER    = 'mouseover';
Event.MOUSE_OUT     = 'mouseout';
Event.CLICK         = 'click';

Event.SCROLL = 'scroll';
Event.RESIZE = 'resize';

Event.CHANGE = 'change';
Event.DIE = 'die';


a.event.Event = Event;
})(window, document, app);
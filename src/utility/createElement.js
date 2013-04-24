;(function(win, doc, a) {
'use strict';

var utility = a.utility || (a.utility = {});

function createElement(arg) {
    arg.tagName = !arg.tagName ? 'div': arg.tagName;
    var elm = doc.createElement(arg.tagName);
    delete arg.tagName;
    
    if (arg.parent) {
        arg.parent.appendChild(elm);
        delete arg.parent;
    }
    if (arg.className) {
        elm.className = arg.className;
        delete arg.className;
    }
    if (arg.cssText) {
        elm.style.cssText = arg.cssText;
        delete arg.cssText;
    }
    if (arg.innerHTML) {
        elm.innerHTML = arg.innerHTML;
        delete arg.innerHTML;
    }
    var name = '';
    for (name in arg) {
        elm.setAttribute(name, arg[name]);
    }

    return elm;
}

utility.createElement = createElement;
}(window, document, app));
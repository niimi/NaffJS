;(function(win, doc, a) {
'use strict';

function xmlHttpRequest(url, data, success, fail) {
    var request = null,
        postData = '',
        index = '';

    try {
        request = new XMLHttpRequest();
    } catch (e) {
        try{
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(ee) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                return null;
            }
        }
    }

    for (index in data) {
        postData += '&'  + index + '=' + encodeURI(data[index]);
    }
    
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(postData);

    if (request) {
        request.onreadystatechange = function () {
            if (request.status == 200) {
                if (request.readyState == 4) {
                    success(request.responseText);
                } else {
                    //loading...
                }
            } else {
                fail(request.responseText);
            }
        }
    }
}


})(window, document, app);
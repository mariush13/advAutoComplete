function log(value) {
    console.log(value);
}

function byId(id) {
    return document.getElementById(id);
}

function byTag(tag, node, array) {
    if (array == null) {
        array = false;
    }
    if (node == null) {
        node = document;
    }
    var ret = node.getElementsByTagName(tag);
    if (ret.length == 1 && array == false) {
        return ret.item(0);
    }
    return ret;
}

function advAutoComplete(element, wordList, params) {
    
   
    function extendElement() {
        input = byTag('input', element);
        input.onfocus = function () {
            input.onkeydown = function (event) {
                var char = String.fromCharCode(event.which)
                if ((event.which == 32 || event.which == 13) && input.value != '' && input.value != ' ') {
                    var box = document.createElement('div');
                    box.className = 'box';
                    box.innerHTML = input.value;
                    element.insertBefore(box, input);
                    input.value = '';
                } else {
                    var boxes = byTag('div', element, true);
                    if (event.which == 8 && input.value.length < 1 && boxes.length > 0) {
                        var last = boxes.item(boxes.length-1);
                        element.removeChild(last);
                    }
                }
            }
            input.onkeyup = function (event) {
                if (event.which == 32) {
                    input.value = '';
                }
            }
        }
        input.onblur = function () {
            input.onkeypress = null;
        }
    }
    
    
    extendElement();
    
}

function onload() {
    new advAutoComplete(byId('advAutoCompleteBox'))
}
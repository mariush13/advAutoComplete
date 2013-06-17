/*
 * 
 * TODO
 * - complete propositial
 * - hover style for parent box
 * - delete items
 * 
 * - nice css
 * 
 */

function advAutoComplete(element, wordList, params) {
    
   
    function extendElement() {
        input = byTag('input', element);
        if (input.value != '') {
            var items = input.value.split(';');
            for (var i = 0 in items) {
                if (items[i] != '') {
                    var box = document.createElement('div');
                    var text = document.createElement('div');
                    var close = document.createElement('div');
                    close.className = 'advAutoCompleteClose';
                    text.className = 'advAutoCompleteText';
                    close.onclick = function () {
                        element.removeChild(this.parentNode);
                    }
                    text.innerHTML = items[i];
                    box.appendChild(text);
                    box.appendChild(close);                    
                    box.className = 'box';
                    element.insertBefore(box, input);
                }
            }
            input.value = '';
        }
        input.onfocus = function () {
            element.className += ' hover';
            input.onkeydown = function (event) {
                var char = String.fromCharCode(event.which)
                if ((event.which == 32 || event.which == 13) && input.value != '' && input.value != ' ') {
                    var box = document.createElement('div');
                    var close = document.createElement('div');
                    var text = document.createElement('div');
                    close.className = 'advAutoCompleteClose';
                    text.className = 'advAutoCompleteText';
                    close.onclick = function () {
                        element.removeChild(this.parentNode);
                    }
                    text.innerHTML = input.value;
                    box.className = 'box';
                    box.appendChild(text);
                    box.appendChild(close);
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
            element.className = element.className.replace(' hover', '');
            input.onkeydown = null;
            input.onkeyup = null;
        }
        input.form.onsubmit = function () {
            input.value = '';
            input.style.visibility = 'hidden';
            var boxes = byTag('div', element, true);
            for (i = 0; i < boxes.length; i++) {
                if (boxes.item(i).className == 'box') {
                    input.value += boxes.item(i).childNodes[0].innerHTML+';';
                    log(boxes.item(i).childNodes[0].innerHTML+';');
                }
            }
        }
        element.onclick = function () {
            input.focus();
        }
    }
    
    
    extendElement();
    
}

function onload() {
    new advAutoComplete(byId('advAutoCompleteBox'));
}
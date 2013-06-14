function advAutoComplete(element, wordList, params) {
    
   
    function extendElement() {
        input = byTag('input', element);
        if (input.value != '') {
            var items = input.value.split(';');
            for (var i = 0 in items) {
                if (items[i] != '') {
                    var box = document.createElement('div');
                    box.className = 'box';
                    box.innerHTML = items[i];
                    element.insertBefore(box, input);
                }
            }
            input.value = '';
        }
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
            input.onkeydown = null;
            input.onkeyup = null;
        }
        input.form.onsubmit = function () {
            input.value = '';
            var boxes = byTag('div', element, true);
            for (i = 0; i < boxes.length; i++) {
                input.value += boxes.item(i).innerHTML+';';
            }
        }
    }
    
    
    extendElement();
    
}

function onload() {
    new advAutoComplete(byId('advAutoCompleteBox'))
}
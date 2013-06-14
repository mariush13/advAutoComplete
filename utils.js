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

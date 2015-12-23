var customGutters = document.getElementsByClassName('gutter-custom');

var customGuttersLength = customGutters.length,
    thisContainer,
    gutterSize,
    type = "col",
    childElements;

for (var i = 0; i < customGuttersLength; i++) {
  thisContainer = customGutters[i];
  gutterSize = thisContainer.getAttribute('data-gutter');

  if ( (" " + thisContainer.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(" rows ") > -1 ) {
    type = "row";
  }

  childElements = thisContainer.querySelectorAll('.flex-container > section');
  setMargins(childElements, type, gutterSize);

}

function setMargins(elems, type, gutterSize) {
  var el, boxes, thisBox;
  for (var i = 0; i < elems.length; i++) {
    el = elems[i];
    if (type === "col") {
      el.style.marginRight = gutterSize+"px";
    } else {
      el.style.marginBottom = gutterSize+"px";
    }

    boxes = el.getElementsByClassName('box');

    if (boxes.length) {
      for (var k = 0; k < boxes.length; k++) {
        thisBox = boxes[k];
        if (type === "col") {
          thisBox.style.marginBottom = gutterSize+"px";
        } else {
          thisBox.style.marginRight = gutterSize+"px";
        }
      }
    }
  }
}
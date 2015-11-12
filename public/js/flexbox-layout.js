var customGutters = document.querySelectorAll('.gutter-custom');

for (var i = 0; i < customGutters.length; i++) {
  var thisContainer = customGutters[i];
  var gutterSize = thisContainer.getAttribute('data-gutter');

  var type = "col";
  if ( (" " + thisContainer.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(" rows ") > -1 ) {
    type = "row";
  }

  var childElements = thisContainer.querySelectorAll('.flex-container > section');
  
  if (type == "col") {
    for (var j = 0; j < childElements.length; j++) {
      var thisCol = childElements[j];
      thisCol.setAttribute("style","margin-right: "+gutterSize+"px;");

      var boxes = thisCol.querySelectorAll('.box');

      if (boxes.length) {
        for (var k = 0; k < boxes.length; k++) {
          var thisBox = boxes[k];
          thisBox.setAttribute("style","margin-bottom: "+gutterSize+"px;");
        }
      }
    }
  }

  if (type == "row") {
    for (var l = 0; l < childElements.length; l++) {
      var thisRow = childElements[l];
      thisRow.setAttribute("style","margin-bottom: "+gutterSize+"px;");

      var boxes = thisRow.querySelectorAll('.box');

      if (boxes.length) {
        for (var m = 0; m < boxes.length; m++) {
          var thisBox = boxes[m];
          thisBox.setAttribute("style","margin-right: "+gutterSize+"px;");
        }
      }
    }
  }

}
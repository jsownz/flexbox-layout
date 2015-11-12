var customGutters = document.querySelectorAll('.gutter-custom');

for (var i = 0; i < customGutters.length; i++) {
  var thisContainer = customGutters[i];
  var gutterSize = thisContainer.getAttribute('data-gutter');

  var rows = thisContainer.querySelectorAll('.row');
  var cols = thisContainer.querySelectorAll('.col');
  
  if (cols.length) {
    for (var j = 0; j < cols.length; j++) {
      var thisCol = cols[j];
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

  if (rows.length) {
    for (var l = 0; l < rows.length; l++) {
      var thisRow = rows[l];
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
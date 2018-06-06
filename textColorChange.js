var rgb = [0, 0, 0];  

var test = function setContrast() {
  // randomly update
  rgb[0] = Math.round(Math.random() * 255);
  rgb[1] = Math.round(Math.random() * 255);
  rgb[2] = Math.round(Math.random() * 255);

  // http://www.w3.org/TR/AERT#color-contrast
  var o = Math.round(((parseInt(rgb[0]) * .299) +
                      (parseInt(rgb[1]) * .587) +
                      (parseInt(rgb[2]) * .114)));
  console.log(o)
  if (o < 125) {
    var color = '#111111';
  } else {
    color = '#fbfbfb';
  }

  // var white =  (o < 125) ? '#fbfbfb';
  // var back = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
  $('#clientNameDisplay h2').css('color', color); 
  // $('#clientNameDisplay h2').css('background-color', back);
}
window.addEventListener("click", test);
window.addEventListener('load', changeCoords);
window.addEventListener('resize', changeCoords);

var c = document.getElementById("imageMap");
var f = c.getBoundingClientRect().width / 1077;
var percent = (Math.round(f*100));
function dividePercent(array) {
    var i;
    var newArray = [];
  for(i=0; i < array.length; i++){
    num = array[i]*(percent/100);
    n = Math.round(num);
      newArray.push(n);
  }
  return newArray;

}
function changeCoords(){
    var areas = document.querySelectorAll('#Map area'),
    i = 0;
    f = c.getBoundingClientRect().width / 1077;
    percent = (Math.round(f*100));
    console.log(f);
    var coords =[[490,403,657,119,775,236,821,402], [492,410,820,409,784,560,656,691], [485,413,652,694,481,739,320,695], [314,693,192,571,148,407,477,409], [478,400,147,400,183,257,313,117], [485,397,321,114,480,72,650,116]]; //100% coords
    for(i=0; i < areas.length; i += 1){
        newCoords = dividePercent(coords[i]);
        areas[i].setAttribute('coords', newCoords);
    }
}
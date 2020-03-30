var ines = document.createElement("img");
ines.setAttribute('src', "images/ines.png");
ines.setAttribute('onmouseover', "mouseOverInes(this)");
ines.setAttribute('onmouseout', "mouseOutInes(this)");
ines.setAttribute('ondblclick', "doubleClick()");
ines.setAttribute('class', "draggable");
ines.setAttribute('id', "ines");
ines.setAttribute('style', "width: 30%; position: absolute; bottom: 0; right:10px");

document.body.appendChild(ines);

// var shopItems = document.getElementsByClassName('shop-item')
// for (item of shopItems){
//     item.setAttribute('ondblclick', "doubleClick()");
// }
function mouseOverInes(img){
	img.src = "images/ines2.png"
}
function mouseOutInes(img){
	img.src = "images/ines.png"
}
function doubleClick(){
	window.location.href = "index.html";
}

$(function() {
    $( ".draggable" ).draggable();
  });
// $('.foreground').mousedown(function(ev) {
//     $('.background').trigger(ev);
// });
// $('.foreground').dblclick(function(ev) {
//     $('.background').trigger(ev);
// });
// $('.foreground').mouseover(function(ev) {
//     $('.background').trigger(ev);
// });
// $('.foreground').mouseout(function(ev) {
//     $('.background').trigger(ev);
// });
// $('.foreground').click(function(ev) {
//     $('.background').scroll();
// });
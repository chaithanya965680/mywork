var item  = document.getElementById("imageItem");
var divItem = document.querySelector("#divItem");
function changer(){
   divElem.innerHTML = "<P>YOUR ITEM IS MISSING</P>";
}
function hide(){
 
  item.setAttribute("hidden","true");
}
function reset(){
 
  item.removeAttribute("hidden","true");
}
function changeImage(){
   item.removeAttribute("src","./assets/CHINN.jpg");
   item.setAttribute("src","./assets/SIG.jpg");
   
   
}
function resetImage(){
    item.removeAttribute("src","./assets/SIG.jpg");
    item.setAttribute("src","./assets/CHINN.jpg");
}
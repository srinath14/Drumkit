//button press and key press
var numberOftimes=document.querySelectorAll(".drum").length;
for(var i=0 ; i < numberOftimes ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handlingevent);
}
document.addEventListener("keypress",handlekeys);
function handlekeys(a){
  makesound(a.key);
   buttonAnimation(a.key);
}

function handlingevent(){
  var buttonInnerHtml=this.innerHTML;
 makesound(buttonInnerHtml);
   buttonAnimation(buttonInnerHtml);
}

function makesound(key){
  switch(key) {
 case "w":
 var audio1 = new Audio('sounds/tom-1.mp3');
 audio1.play();
 break;
 case "a":
 var audio2 = new Audio('sounds/tom-1.mp3');
 audio2.play();
 break;
 case "s":
 var audio3 = new Audio('sounds/tom-2.mp3');
 audio3.play();
 break;
 case "d":
 var audio4 = new Audio('sounds/tom-4.mp3');
 audio4.play();
 break;
 case "j":
 var audio5 = new Audio('sounds/snare.mp3');
 audio5.play();
 break;
 case "k":
 var audio6 = new Audio('sounds/crash.mp3');
 audio6.play();
 break;
 case "l":
 var audio7 = new Audio('sounds/kick-bass.mp3');
 audio7.play();
 break;
 default:
 console.log(key);
 }
}
function buttonAnimation(key){
  console.log(key);
  var animation=document.querySelector("."+key);
  animation.classList.add("pressed");
  setTimeout(function(){
    animation.classList.remove("pressed");
  },100);

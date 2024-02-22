const aa = document.querySelector(".aa")
const ab = document.querySelector(".ab")
const ba = document.querySelector(".ba")
const bb = document.querySelector(".bb")
const body = document.querySelector('body')

const colorArray = [aa,ab,ba,bb]

/* 

click to start

random stage1 color picked and stored 
listener stage1
se click =/ stage -> game over
se cliock stage1 -> pisca stage1 + pisca staged 2
...

it can be done like:

listener any of matriz -> pick random color + flick + push array + add listener if click right + add wrong game over others

if click correct -> remove event listener + flick array[0] + random color flick and push array + add array[0] event listener
+ if click array[0], array[0] remove listener and add game over, array[1] add listener and remove game over
....
if click gameover -> title screen + array clear ez


pick random color + add array + add corret func + add other wrong func
correct -> flick corrct + click correct + flick correct + flick random

*/

function randomColor (){
    return Math.round(Math.random()*4)
}


function correct(element) {
    element.classList.add("flick");
    setTimeout(() => {
      element.classList.remove("flick");
    }, 1000);
  }


function GameStart (){
    

 let GamerOrder = [];

 function Correct () {
    let random = randomColor()
    GamerOrder.push(colorArray[random])
    correct(colorArray[random])
    
 }
 
Correct()
  
colorArray.forEach(function (element){
    element.removeEventListener("click", Start)
 })

setTimeout(colorArray[random].classList.remove("flick"), 3000);
}







function Start (){
    GameStart()
}

colorArray.forEach(function (element){
    element.addEventListener("click", Start)
 })



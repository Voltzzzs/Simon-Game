const aa = document.querySelector(".aa");
const ab = document.querySelector(".ab");
const ba = document.querySelector(".ba");
const bb = document.querySelector(".bb");
const button = document.querySelector(".button")
const letitle = document.querySelector(".letitle")
const grido = document.querySelector(".box")


const colorArray = [aa, ab, ba, bb];
let gamerOrder = [];
let playerClick = [];


var GameStart = false

/*Button*/
button.addEventListener("click", ()=>{

  
  [button,letitle].forEach((element)=>{
    element.style.display = "none"
    element.style.zIndex = "-1"
  })

    grido.style.display = "grid"
   GameStart = true
})

document.querySelector(".button").addEventListener("click", Gaming)

/*Button*/



function randomColor() {
  return Math.floor(Math.random() * 4);
}



function Gaming (){
  playerClick = [];
  
  let randomcu = randomColor()
  gamerOrder.push(colorArray[randomcu])

  FlickSequence()

}


/* Flicking */
function FlickSequence (){
  gamerOrder.forEach(function(element){
    element.classList.add("flick")
  })
}

/* Flicking */


function Player (){
  document.querySelectorAll(".opt").forEach(element =>{
    element.addEventListener("click",(event)=>{
     playerClick.push(event.target)
     console.log(playerClick)
     console.log(gamerOrder)
    })
  })
  let poscheck = playerClick.length-1
  Check(poscheck)
}





function Check(position){
    if(playerClick[position] === gamerOrder[position]){
      if(playerClick.length === gamerOrder.length){
      setTimeout(Gaming, 1000);
      FlickSequence()
      }
    } else {
      WrongStat()
    }
      
  }


  function WrongStat (){
    alert("ain")
  }
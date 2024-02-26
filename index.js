const aa = document.querySelector(".aa");
const ab = document.querySelector(".ab");
const ba = document.querySelector(".ba");
const bb = document.querySelector(".bb");
const button = document.querySelector(".button");
const letitle = document.querySelector(".letitle");
const grido = document.querySelector(".box");

const colorArray = [aa, ab, ba, bb];
let gamerOrder = [];
let playerClick = [];
let poscheck;

var GameStart = false;

/*Button*/
button.addEventListener("click", () => {
  [button, letitle].forEach((element) => {
    element.style.display = "none";
    element.style.zIndex = "-1";
  });

  grido.style.display = "grid";
});

document.querySelector(".button").addEventListener("click", Gaming);

/*Button*/

function randomColor() {
  return Math.floor(Math.random() * 4);
}

function Gaming() {
  playerClick = [];

  let randomcu = randomColor();
  gamerOrder.push(colorArray[randomcu].id);

  FlickSequence();
  console.log(playerClick);
  console.log(gamerOrder);
}

/* Flicking */
function FlickSequence() {
  gamerOrder.forEach(function (id, index) {
    const element = document.getElementById(id);

    setTimeout(() => {
      element.classList.add("flick");
      setTimeout(() => {
        element.classList.remove("flick");
      }, 1000); // Adjust this value as needed
    }, index * 1000);
  });
}

/* Flicking */

document.querySelectorAll(".opt").forEach((element) => {
  element.addEventListener("click", (event) => {
    playerClick.push(event.target.id);
    poscheck = playerClick.length - 1;
    Check(poscheck);
    document.querySelector("#bop").play();
  });
});

function Check(position) {
  if (playerClick[position] === gamerOrder[position]) {
    if (playerClick.length === gamerOrder.length) {
      setTimeout(Gaming, 1000);
    }
  } else {
    WrongStat();
  }
}

function WrongStat() {
  gamerOrder = [];
  playerClick = [];
  document.querySelector(".end").style.display = "grid";
  grido.style.display = "none";
  document.querySelector("#wrong").play()
}

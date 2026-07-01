// Saved Game
// Version 7

const SAVE_KEY=
"subsGame";

let save=
JSON.parse(
localStorage.getItem(
SAVE_KEY
)
)||{

subs:0,
power:1,
price:50

};

let subs=
save.subs;

let power=
save.power;

let price=
save.price;

function saveGame(){

localStorage.setItem(

SAVE_KEY,

JSON.stringify({

subs,
power,
price

})

);

}

function render(){

document
.getElementById(
"subs"
)
.innerHTML=
subs;

document
.getElementById(
"power"
)
.textContent=
power;

document
.getElementById(
"price"
)
.textContent=
price;

// tự lưu
saveGame();

}

// tải lại sau F5
window.addEventListener(

"load",

()=>{

let data=

JSON.parse(
localStorage
.getItem(
SAVE_KEY
)
);

if(data){

subs=
data.subs||0;

power=
data.power||1;

price=
data.price||50;

}

render();

}

);

// lưu khi thoát
window.addEventListener(

"beforeunload",

saveGame

);

render();

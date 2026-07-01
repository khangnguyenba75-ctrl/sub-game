// Saved Game
// Version 8

const SAVE_KEY="subsGame";

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

let subs=save.subs;
let power=save.power;
let price=save.price;

const subUI=
document.getElementById(
"subs"
);

const powerUI=
document.getElementById(
"power"
);

const priceUI=
document.getElementById(
"price"
);

// PHẢI CÓ render()
function render(){

if(subUI)
subUI.innerHTML=subs;

if(powerUI)
powerUI.textContent=power;

if(priceUI)
priceUI.textContent=price;

localStorage.setItem(

SAVE_KEY,

JSON.stringify({

subs,
power,
price

})

);

}

function uploadVideo(){

let file=
document
.getElementById(
"video"
)
.files[0];

if(!file){

alert(
"Chọn MP4 hoặc MOV"
);

return;

}

let count=0;

let timer=
setInterval(()=>{

subs+=power;

render();

count++;

if(count>=6){

clearInterval(
timer);

}

},2000);

}

function buyPower(){

if(subs<price){

alert(
"Thiếu Sub"
);

return;

}

subs-=price;

price+=50;

power++;

render();

}

// tải lại sau F5
window.onload=()=>{

render();

};

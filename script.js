// Saved Game
// Version 3

let save =
JSON.parse(
localStorage.getItem("subsGame")
)||{
subs:0,
power:1,
price:50,
queue:0,
working:false
};

let subs=save.subs;
let power=save.power;
let price=save.price;

let queue=
save.queue||0;

let working=
save.working||false;

const subUI=
document.getElementById("subs");

const powerUI=
document.getElementById("power");

const priceUI=
document.getElementById("price");

function saveGame(){

localStorage.setItem(
"subsGame",

JSON.stringify({
subs,
power,
price,
queue,
working
})

);

}

function render(){

subUI.innerHTML=subs;

powerUI.textContent=
power;

priceUI.textContent=
price;

saveGame();

}

setInterval(()=>{

subUI.innerHTML=subs;

},2000);

async function processQueue(){

if(working) return;

working=true;

while(queue>0){

await new Promise(r=>
setTimeout(r,12000)
);

subs+=power;

queue--;

render();

}

working=false;

saveGame();

}

function uploadVideo(){

let file=
document.getElementById("video")
.files[0];

if(!file){

alert(
"Chọn MP4 hoặc MOV"
);

return;

}

queue++;

render();

alert(
"Đã thêm hàng đợi: "+
queue
);

processQueue();

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

power+=1;

render();

}

async function reportBug(){

if(navigator.share){

await navigator.share({

title:
"Subs Game",

text:
"Phát hiện lỗi"

});

}else{

alert(
"navigator.share không hỗ trợ"
);

}

}

subUI.onclick=()=>{

alert(
"Đang chờ: "+
queue
);

};

render();

if(queue>0){

processQueue();

}

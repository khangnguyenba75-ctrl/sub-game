// Saved Game
// Version 2

let save=
JSON.parse(
localStorage.getItem("subsGame")
)||{
subs:0,
power:1,
price:50
};

let subs=save.subs;
let power=save.power;
let price=save.price;

const subUI=
document.getElementById("subs");

const powerUI=
document.getElementById("power");

const priceUI=
document.getElementById("price");

subUI.innerHTML=subs;

function render(){

subUI.innerHTML=subs;

powerUI.textContent=
power;

priceUI.textContent=
price;

localStorage.setItem(
"subsGame",

JSON.stringify({
subs,
power,
price
})

);

}

setInterval(()=>{

subUI.innerHTML=subs;

},2000);

function uploadVideo(){

let file=
document.getElementById("video")
.files[0];

if(!file){
alert("Chọn MP4 MOV");
return;
}

alert(
"Đăng video thành công\nChờ 12 giây"
);

setTimeout(()=>{

subs+=
power;

render();

alert(
"+"+
power+
" Sub"
);

},12000);

}

function buyPower(){

if(
subs<
price
){
alert("Thiếu sub");
return;
}

subs-=
price;

price+=50;

power+=1;

render();

}

async function reportBug(){

if(
navigator.share
){

await navigator.share({

title:
"Subs Game",

text:
"Lỗi game"

});

}else{

alert(
"navigator.share không hỗ trợ"
);

}

}

render();

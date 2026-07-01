// Version 4
// Saved Game

let queue=0;
let running=false;

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

alert(
"Đã thêm "+
queue+
" video"
);

processQueue();

}

async function processQueue(){

if(running) return;

running=true;

await new Promise(r=>
setTimeout(r,12000)
);

// tăng hết sau 12s
let add=
queue*
power;

queue=0;

// odometer tăng 2000ms
let start=subs;

let end=
subs+
add;

let step=
Math.max(
1,
Math.ceil(
(end-start)/10
)
);

let timer=
setInterval(()=>{

start+=step;

if(start>=end){

start=end;

clearInterval(
timer
);

}

subs=start;

render();

},2000);

running=false;

}

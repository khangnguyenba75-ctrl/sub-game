// Saved Game
// Version 5

let uploading=false;

function uploadVideo(){

if(uploading){

alert(
"Đang tăng Sub"
);

return;

}

let file=
document.getElementById("video")
.files[0];

if(!file){

alert(
"Chọn MP4 hoặc MOV"
);

return;

}

uploading=true;

let tick=0;

let timer=
setInterval(()=>{

subs+=power;

render();

tick++;

if(tick>=6){

clearInterval(
timer
);

uploading=false;

alert(
"Tăng Sub xong"
);

}

},2000);

}

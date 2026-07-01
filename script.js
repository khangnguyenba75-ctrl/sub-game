// Saved Game
// Version 6

let uploading=false;

function uploadVideo(){

if(uploading){

alert(
"Đang đăng video"
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

// tăng ngay khi đăng
subs+=power;

render();

let count=1;

let timer=
setInterval(()=>{

subs+=power;

render();

count++;

if(count>=6){

clearInterval(
timer);

uploading=false;

}

},2000);

}

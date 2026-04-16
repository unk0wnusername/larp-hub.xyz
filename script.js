const card=document.getElementById("card");
const enter=document.getElementById("enter");
const audio=document.getElementById("audio");

enter.addEventListener("click",()=>{
enter.style.display="none";
audio.play().catch(()=>{});
});

document.addEventListener("mousemove",(e)=>{
const x=(e.clientX/window.innerWidth-.5)*12;
const y=(e.clientY/window.innerHeight-.5)*-12;
card.style.transform=`rotateX(${y}deg) rotateY(${x}deg)`;
});

function refresh(){
location.reload();
}

document.addEventListener("keydown",(e)=>{
const key=e.key.toLowerCase();

if(
e.code==="F12"||
(e.ctrlKey&&e.shiftKey&&(key==="i"||key==="j"||key==="c"))||
(e.ctrlKey&&key==="u")
){
refresh();
}
});

document.addEventListener("contextmenu",(e)=>{
refresh();
e.preventDefault();
});

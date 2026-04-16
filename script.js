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

document.addEventListener("keydown",(e)=>{
if(
e.code==="F12"||
(e.ctrlKey&&e.shiftKey&&(e.code==="KeyI"||e.code==="KeyJ"||e.code==="KeyC"))||
(e.ctrlKey&&(e.code==="KeyU"))
){
e.preventDefault();
return false;
}
});

document.addEventListener("contextmenu",(e)=>{
e.preventDefault();
});

setInterval(()=>{
const before=new Date().getTime();
debugger;
const after=new Date().getTime();
if(after-before>100){
document.body.innerHTML="";
location.reload();
}
},1000);

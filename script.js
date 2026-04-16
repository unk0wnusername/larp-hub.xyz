const card=document.getElementById("card");
const enter=document.getElementById("enter");
const audio=document.getElementById("audio");

enter.onclick=()=>{
enter.style.display="none";
audio.play().catch(()=>{});
};

document.addEventListener("mousemove",e=>{
const x=(e.clientX/window.innerWidth-.5)*12;
const y=(e.clientY/window.innerHeight-.5)*-12;
card.style.transform=`rotateX(${y}deg) rotateY(${x}deg)`;
});

document.addEventListener("keydown",function(e){
if(e.key==="F12"){
e.preventDefault();
return false;
}
if(e.ctrlKey&&e.shiftKey){
const k=e.key.toLowerCase();
if(k==="i"||k==="j"||k==="c"){
e.preventDefault();
return false;
}
}
if(e.ctrlKey&&(e.key==="u"||e.key==="U")){
e.preventDefault();
return false;
}
});

document.addEventListener("contextmenu",function(e){
e.preventDefault();
});

const card=document.getElementById("card");
const enter=document.getElementById("enter");
const audio=document.getElementById("audio");

enter.onclick=()=>{
enter.style.display="none";
audio.play();
};

document.addEventListener("mousemove",e=>{
const x=(e.clientX/window.innerWidth-.5)*12;
const y=(e.clientY/window.innerHeight-.5)*-12;
card.style.transform=`rotateX(${y}deg) rotateY(${x}deg)`;
});
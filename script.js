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

function lockdown(){
if(document.getElementById("locked")) return;

document.body.innerHTML=`
<div id="locked" style="
position:fixed;
inset:0;
background:#000;
color:#fff;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
font-family:monospace;
z-index:999999;
text-align:center;
letter-spacing:2px;
">
<div style="font-size:34px;margin-bottom:15px;">ACCESS DENIED</div>
<div style="font-size:13px;opacity:.7;">developer tools detected</div>
<div style="margin-top:25px;font-size:11px;opacity:.4;">reloading session...</div>
</div>
`;

setTimeout(()=>{
location.reload();
},1500);
}

document.addEventListener("keydown",(e)=>{
const key=e.key.toLowerCase();

if(
e.code==="F12"||
(e.ctrlKey&&e.shiftKey&&(key==="i"||key==="j"||key==="c"))||
(e.ctrlKey&&key==="u")
){
e.preventDefault();
lockdown();
}
});

document.addEventListener("contextmenu",(e)=>{
e.preventDefault();
lockdown();
});

setInterval(()=>{
const widthDiff=window.outerWidth-window.innerWidth;
const heightDiff=window.outerHeight-window.innerHeight;

if(widthDiff>160||heightDiff>160){
lockdown();
}
},500);

<?php
header("Content-Type: text/html; charset=UTF-8");
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>profile | k1tt7</title>

<meta property="og:type" content="website">
<meta property="og:title" content="k1tt7">
<meta property="og:description" content="larping in silence... click to enter">
<meta property="og:image" content="https://files.catbox.moe/4ry366.gif">
<meta property="og:url" content="https://yourdomain.com">
<meta name="theme-color" content="#ff3333">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="k1tt7">
<meta name="twitter:description" content="larping in silence... click to enter">
<meta name="twitter:image" content="https://files.catbox.moe/4ry366.gif">

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=JetBrains+Mono:wght@300&display=swap');

*{
margin:0;
padding:0;
box-sizing:border-box;
cursor:crosshair;
}

body{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
font-family:"Inter",sans-serif;
background:black;
color:white;
overflow:hidden;
perspective:1000px;
}

body::before{
content:"";
position:fixed;
inset:0;
background:url("https://files.catbox.moe/4ry366.gif") center/cover no-repeat;
filter:grayscale(1) brightness(.3) blur(6px);
z-index:-2;
}

.tv-effect{
position:fixed;
inset:0;
pointer-events:none;
background:
linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,.2) 50%),
linear-gradient(90deg,
rgba(255,0,0,.03),
rgba(0,255,0,.01),
rgba(0,0,255,.03));
background-size:100% 3px,3px 100%;
opacity:.6;
}

#enter{
position:fixed;
inset:0;
background:black;
display:flex;
justify-content:center;
align-items:center;
z-index:10;
transition:.6s;
}

#enter.hidden{
opacity:0;
pointer-events:none;
}

.enter-text{
font-family:"JetBrains Mono",monospace;
font-size:12px;
letter-spacing:4px;
animation:pulse 2s infinite;
}

@keyframes pulse{
50%{opacity:.3;}
}

.card{
width:340px;
padding:28px;
background:rgba(10,10,10,.75);
border:1px solid rgba(255,255,255,.08);
backdrop-filter:blur(8px);
border-radius:12px;
text-align:center;
transition:transform .08s linear;
box-shadow:0 0 30px rgba(0,0,0,.6);
}

.avatar{
width:90px;
height:90px;
margin:0 auto 15px;
overflow:hidden;
border:1px solid rgba(255,255,255,.2);
border-radius:10px;
}

.avatar img{
width:100%;
height:100%;
object-fit:cover;
}

.name{
font-size:20px;
font-weight:700;
}

.status{
font-family:"JetBrains Mono",monospace;
font-size:11px;
color:#ff3333;
margin-top:6px;
letter-spacing:2px;
}

.bio{
margin:18px 0;
font-size:13px;
color:rgba(255,255,255,.6);
}

.links{
display:flex;
flex-direction:column;
gap:8px;
}

.links a{
padding:10px;
font-size:11px;
text-decoration:none;
color:rgba(255,255,255,.8);
border:1px solid rgba(255,255,255,.08);
background:rgba(255,255,255,.03);
transition:.25s;
}

.links a:hover{
background:white;
color:black;
}

iframe{
width:100%;
height:80px;
margin-top:15px;
border-radius:8px;
filter:invert(1) grayscale(1) opacity(.8);
}
</style>
</head>

<body>

<div id="enter">
<div class="enter-text">[ CLICK TO ENTER ]</div>
</div>

<div class="tv-effect"></div>

<div class="card" id="card">

<div class="avatar">
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F474x%2F77%2F20%2F2c%2F77202c2d4135df21eff23d10f9c10c5e.jpg">
</div>

<div class="name">~= k1tt7 =~</div>
<div class="status">I LOVE FEMBOYS @w@</div>

<div class="bio">
check the links below<br>
<i>@femboy-hub.xyz</i>
</div>

<div class="links">
<a href="https://t.me/Jewslayer1984">TELEGRAM</a>
<a href="https://www.femboy-hub.xyz">WEBSITE</a>
<a href="https://youtu.be/uF5muSPTsQk">CLICK ME :3</a>
</div>

<iframe src="https://open.spotify.com/embed/track/23TRkuRH6Z4wfzKFUBNFyO"></iframe>

</div>

<audio id="audio" loop>
<source src="sound.mp3" type="audio/mpeg">
</audio>

<script>
const card=document.getElementById("card");
const enter=document.getElementById("enter");
const audio=document.getElementById("audio");

enter.onclick=()=>{
enter.classList.add("hidden");
audio.play().catch(()=>{});
};

document.onmousemove=e=>{
const x=(e.clientX/innerWidth-.5)*14;
const y=(e.clientY/innerHeight-.5)*-14;

card.style.transform=`rotateX(${y}deg) rotateY(${x}deg) translateY(-2px)`;
};
</script>

</body>
</html>

const card = document.getElementById("card");
const enter = document.getElementById("enter-screen");
const audio = document.getElementById("bgm");
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

(function() {
    const threshold = 160;

    const detectAction = () => {
        while(true) { debugger; }
    };

    const checkResize = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) detectAction();
    };

    document.addEventListener('contextmenu', e => e.preventDefault());

    document.addEventListener('keydown', e => {
        if (
            e.keyCode === 123 ||
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
            (e.ctrlKey && e.keyCode === 85)
        ) {
            e.preventDefault();
        }
    });

    setInterval(() => {
        const start = performance.now();
        debugger;
        if (performance.now() - start > 100) window.location.reload();
        checkResize();
    }, 1000);
})();

enter.onclick = () => {
    enter.classList.add("hidden");
    audio.play().catch(() => {});
};

function copy(type, addr) {
    navigator.clipboard.writeText(addr);
    alert(type + " address copied:\n" + addr);
}

document.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - .5) * 15;
    const y = (e.clientY / window.innerHeight - .5) * -15;
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

let w, h, snow = [];

function init() {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
    snow = Array.from({ length: 100 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        v: Math.random() + 0.5
    }));
}

function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(255,255,255,.6)";
    ctx.beginPath();

    snow.forEach(f => {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);

        f.y += f.v;
        f.x += Math.sin(f.y / 20) * .4;

        if (f.y > h) {
            f.y = -10;
            f.x = Math.random() * w;
        }
    });

    ctx.fill();
    requestAnimationFrame(draw);
}

init();
draw();

addEventListener("resize", () => {
    init();
});

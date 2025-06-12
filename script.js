const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Taille dynamique du canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Mettre à jour la taille lors du redimensionnement
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const trailLength = 20;
const trailColor = "0,255,255"; // Cyan fluo
const trail = [];

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < trail.length; i++) {
    const point = trail[i];
    ctx.beginPath();
    ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${trailColor}, ${1 - i / trail.length})`;
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

function addTrailPoint(x, y) {
  trail.push({ x, y });
  if (trail.length > trailLength) trail.shift();
}

document.addEventListener("mousemove", (e) => {
  addTrailPoint(e.clientX, e.clientY);
});

window.onload = () => {
  draw();
};

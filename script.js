const canvas = document.getElementById('projectCanvas');
const ctx = canvas.getContext('2d');

const eyes = 30;
const tooths = 20;

ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.lineWidth = 2;

// Orejas (ellipse)
ctx.beginPath();
ctx.ellipse(150, 70, 30, 60, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.ellipse(240, 70, 30, 60, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// Cara
ctx.beginPath();
ctx.ellipse(200, 170, 75, 75, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// Ojos
ctx.fillStyle = "black";
ctx.beginPath();
ctx.ellipse(170, 150, eyes / 2, eyes / 2, 0, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.ellipse(230, 150, eyes / 2, eyes / 2, 0, 0, Math.PI * 2);
ctx.fill();

// Boca
ctx.beginPath();
ctx.moveTo(150, 200);
ctx.lineTo(250, 200);
ctx.stroke();

// Dientes (noFill -> strokeRect)
ctx.fillStyle = "white";
ctx.strokeRect(185, 200, 15, tooths);
ctx.fillRect(185, 200, 15, tooths);
ctx.strokeRect(200, 200, 15, tooths);
ctx.fillRect(200, 200, 15, tooths);
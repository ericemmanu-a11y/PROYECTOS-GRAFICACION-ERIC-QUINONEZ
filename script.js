const canvas = document.getElementById('projectCanvas');
const ctx = canvas.getContext('2d');

// Fondo (background)
ctx.fillStyle = "rgb(144, 207, 232)";
ctx.fillRect(0, 0, 400, 400);

// Suelo (fill, rect)
ctx.fillStyle = "rgb(13, 222, 13)";
ctx.fillRect(0, 300, 400, 100);

// Sol (fill, ellipse -> arc)
ctx.fillStyle = "rgb(247, 221, 24)";
ctx.beginPath();
ctx.arc(80, 64, 50, 0, Math.PI * 2);
ctx.fill();

// Muñeco de nieve (fill, ellipse -> arc)
ctx.fillStyle = "rgb(255, 255, 255)";
ctx.strokeStyle = "black";
ctx.lineWidth = 2;

ctx.beginPath();
ctx.arc(200, 300, 75, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 120, 37.5, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
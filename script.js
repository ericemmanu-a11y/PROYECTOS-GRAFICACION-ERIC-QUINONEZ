const canvas = document.getElementById('projectCanvas');
const ctx = canvas.getContext('2d');

let sunSize = 30;

function animate() {
    // Cielo (background)
    ctx.fillStyle = "rgb(82, 222, 240)";
    ctx.fillRect(0, 0, 400, 400);

    // Sol (noStroke -> solo fill)
    ctx.fillStyle = "rgb(255, 204, 0)";
    ctx.beginPath();
    ctx.ellipse(200, 298, sunSize / 2, sunSize / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tierra
    ctx.fillStyle = "rgb(76, 168, 67)";
    ctx.fillRect(0, 300, 400, 100);

    // Actualizar variable para el siguiente fotograma
    sunSize = sunSize + 1;

    // Reiniciar animación si el sol es muy grande
    if (sunSize > 600) {
        sunSize = 30;
    }

    // Pedir al navegador que llame a esta función de nuevo
    requestAnimationFrame(animate);
}

// Iniciar la animación
animate();
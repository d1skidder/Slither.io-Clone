const canvas = document.getElementById("gameCanvas");
const C = canvas.getContext("2d");

export default function draw() {
    C.fillStyle = "#000";
    C.fillRect(0, 0, window.innerWidth, window.innerHeight);
    C.fill();

    requestAnimationFrame(draw);
}
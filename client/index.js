import draw from "./render/render.js";

draw();
alert("sad")

const ws = new WebSocket("https://nqzq53pr-8080.use.devtunnels.ms/")
ws.onopen = () => {
    ws.send(JSON.stringify(["sn"]))
    console.error("workoskss")
}

ws.onerror = (err) => {
    console.error(err)
}
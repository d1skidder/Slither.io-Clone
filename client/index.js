import draw from "./render/render.js";

draw();
alert("sad")


const ws = new WebSocket("ws://localhost:8080")
ws.onopen = () => {
    ws.send(JSON.stringify(["sn"]))
    console.error("workoskss")
}

ws.onmessage = (e) => {
    console.log(e);
    const m = JSON.parse(e.data);
    console.warn(m)
}

ws.onerror = (err) => {
    console.error(err)
}



export const game = {
    me: null,
    snakes: [],
}
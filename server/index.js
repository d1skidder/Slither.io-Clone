const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}./server/public/index.html`);
});

app.listen(1212);

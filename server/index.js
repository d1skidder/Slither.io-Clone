const express = require("express");
const path = require("path");
const ws = require("ws");

require("dotenv").config({ path: "../.env" });

const Server = new ws.Server({ port: 8080 });

const app = express();

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../", "../", "/server/public/index.html"));
});

app.listen(1122);

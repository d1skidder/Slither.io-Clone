import express from "express";
import path from "path";
const WebSocket = require("ws");

require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

export const Server = new WebSocket.Server({ port: 8080 });
const app = express();

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../../server/public/index.html"));
});

app.get("*", (req, res) => {
    const requestedFile = path.join(path.resolve(__dirname, "../", "../"), req.url);

    res.sendFile(requestedFile, (error) => {
        if (error) {
            console.error(requestedFile, req.url);
            res.status(404).send("File not found!");
        }
    });
});


app.listen(1122, () => {
	console.log("Running on PORT 1122!");
});

import express from "express";
import path from "path";

import GameServer from "./classes/server.js";
import Snake from "./classes/snake.js";
import utils from "../utils.js";
import WebSocket, {WebSocketServer} from "ws";

require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

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


export const Server = new WebSocketServer({port: 8080})


const Game = new GameServer(9);
Game.startServer();

const connectedPlayers = [];

Server.on("connection", (stream) => {
	stream.on("open", () => {
        stream.protoSend = (type, ...args) => {
            const message = [type, ...args];
            stream.send(JSON.stringify(message));
        };
    });

	stream.on("message", (eventMessage) => {
        console.log("msg", JSON.parse(eventMessage));

        const message = JSON.parse(eventMessage);

        //message = JSON.parse(message);

        const type = message[0];
        const args = message.slice(1);

        console.log(type);

        switch (type) {
            case "sn": {
                if(stream.snake || connectedPlayers.includes(1111)) {
                    // multibox attempt, disconnect immediately.
                    stream.close();
                    break;
                }

                //connectedPlayers.push(req.ip);

                stream.snake = new Snake(utils.getId());
                Game.addSnake(stream.snake);
                Game.addClient(stream);

                //stream.protoSend("setid", stream.snake.id);
                stream.send(JSON.stringify(["setid", stream.snake.id]));

                Game.sendAllButOne(stream, "bismillah", ["inshallah"]);

                break;
            }

            case "mo": {
                // update movement direction

                // unsafe direction passed, disconnect
                if(!Number.isSafeInteger(args[0])) {
                    stream.close();
                    break;
                }

                stream.snake.dir = args[0];

                break;
            }
        }
    });

	stream.on("close", () => {});

	stream.on("error", (error) => {
		console.error(`WebSocket Connection Error: ${error}`);
	});
});

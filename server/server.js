import { Server } from "./index.js";
import Snake from "./classes/snake.js";
import GameServer from "./classes/server.js";
import utils from "../utils.js";

const Game = new GameServer(9);
Game.startServer();

const connectedPlayers = [];

Server.on("connection", (stream) => {
    console.log("wsa")
	stream.on("open", () => {});

	stream.on("message", (message) => {
        console.log("msg", message);

        message = JSON.parse(message);

        const type = message[0];
        const args = message.slice(1);

        console.log(type, args)

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

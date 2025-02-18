import utils from "../../utils";

export default class GameServer {
	constructor(tickRate, maxClients, servers) {
		this.tickRate = 1000 / tickRate;
		this.maxClients = maxClients;
		this.servers = JSON.parse(servers);

		this.snakes = [];
		this.orbs = [];

		this.bounds = 6000;

		this.snakeAccelMaxSpeed = 130;
		this.timeToReachMaxSpeed = 800;
	}

    addSnake(snake) {
        this.snakes.push(snake);
    }

	updateSnakes() {
		// update snakes positions
		for (const snake of this.snakes) {
			snake.x += 60 * snake.maxSpeedCount * Math.cos(snake.dir);
			snake.y += 60 * snake.maxSpeedCount * Math.sin(snake.dir);

			if (snake.accelerating) {
				snake.maxSpeedCount = Math.max(
					1,
					snake.accelerating / (snake.accelerating + this.timeToReachMaxSpeed) +
						1.1,
				);
			}

			if (utils.getDistance([snake.x, snake.y], [0, 0]) > this.bounds) {
				// kill snake
			}

            console.log(snake.x, snake.y)
		}
        console.log(this.snakes)
	}

	checkSnakeCollisions() {}

	startServer() {
		setInterval(() => {
			this.updateSnakes();
		}, this.tickRate);
	}
}

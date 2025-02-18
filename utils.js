const { default: config } = require("./config");

// TODO: Adjust for scales.
function getRandomCoord() {
	return {
		x: Math.random() * config.mapSize,
		y: Math.random() * config.mapSize,
	};
}

export default {
	getRandomCoord,
};

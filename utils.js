const { default: config } = require("./config");

// TODO: Adjust for scales.
function getRandomCoord() {
	return {
		x: Math.random() * config.mapSize,
		y: Math.random() * config.mapSize,
	};
}

let count = 0;
function getId() {
	return ++count;
}

function getDistance(a, b) {
	return Math.hypot(b[1] - a[1], b[0] - a[0]);
}

function findFromArray(thing, type, arr) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i][type] === thing) {
			return arr[i];
		}
	}
}

export default {
	getRandomCoord,
	getId,
	getDistance,
	findFromArray,
};

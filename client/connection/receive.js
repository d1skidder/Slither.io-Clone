import { game } from "..";
import utils from "../../utils";

export default function incoming(type, data) {
    switch (type) {
        case "us": 
            updateSnakes(data);
            break;

        case "death": break;
        case "nigga": break;

        default:
            console.warn("what???", type, data);
            break;
    }
}

function updateSnakes(data) {
    // update all snake data as needed
    // id, x, y
    console.log(data);
    for(let i = 0; i < data.length; i += 3) {
        const snake = utils.findFromArray(data[i], "id", game);
        console.warn("sn", snake)

        if(!snake) return;

        snake.x = data[i + 1];
        snake.y = data[i + 2];
    }
}
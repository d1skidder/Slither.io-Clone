import utils from "../../utils";

export default class Orb {
    constructor() {
        this.center = {
            x: utils.getRandomCoord(),
            y: utils.getRandomCoord()
        }

        this.x = this.center.x;
        this.y = this.center.y;

        this.rotation = 0;
    }

    // TODO: Make orbs rotate around the Center of Origin.
    update(delta = 111) {
        
    }
}
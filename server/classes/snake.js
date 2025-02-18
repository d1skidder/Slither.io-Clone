export default class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.length = 10;

        this.segments = [];

        this.accelerating = false;
    }

    checkCollision() {
        // TODO: Implement collision checks for orbs and other snakes.
    }
}
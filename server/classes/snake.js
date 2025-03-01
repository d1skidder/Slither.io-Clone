export default class Snake {
    constructor(id) {
        this.id = id;
        
        this.x = 0;
        this.y = 0;
        this.length = 10;

        this.dir = 0;

        this.segments = [];

        this.accelerating = false;
        this.maxSpeedCount = 1;
    }

    checkCollision() {
        // TODO: Implement collision checks for orbs and other snakes.
    }
}
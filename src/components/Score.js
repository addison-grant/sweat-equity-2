class Score {
    constructor() {
        this.score = 0;
    }

    add(increment) {
        console.assert(increment >= 0, this.Score + increment !== Infinity);
        this.score += increment;
    }
    
    clear() {
        this.score = 0;
    }
    
    get() {
        return this.score;
    }
}
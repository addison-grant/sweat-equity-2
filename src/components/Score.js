class Score {
    constructor() {
        
        this.score = 0;
        this.time = 0;
    }
    
    addRepair = () => {
        
        console.assert(this.score >= 0, this.Score + 1 !== Infinity);
        return this.score += 1;
    }

    setTime = (timeValue) => {
        
        console.assert(timeValue >= 0, timeValue !== Infinity);
        return this.time = timeValue;
    }
    
    clear() {
        
        this.score = 0;
    }
    
    getRepairs() {
        
        return this.score;
    }
    
    getTime() {
        
        return this.time;
    }
}

export default Score;
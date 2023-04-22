
function StopWatch(){
    let startTime, endTime, running, duration=0;
    this.start = function(){
        if (running){
            throw new Error("Stopwatch is already running")
        }
        startTime = new Date().getTime();
        console.log("startTime", startTime)
        running = true
    };
    this.stop = function(){
        if (!running){
            throw new Error('Stopwatch is already stopped')
        }
        endTime = new Date().getTime();
        console.log("endTime", endTime)
        running = false
        duration += (endTime-startTime)/1000;
    };
    this.reset = function(){
        startTime = null;
        endTime= null;
        duration = 0;
        running = false;
    };
    Object.defineProperty(this,  "duration", {
        get : function(){return duration}
    })
};

//const sw = new Stopwatch()
//console.log(sw)




































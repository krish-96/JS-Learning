
function conLog(msg){
    return console.log(msg)
};

conLog("This is from New Stop watch")

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

    Object.defineProperty(this, "startTime", {
    get: function(){return this.start();}
    })
    Object.defineProperty(this, "endTime", {
    get: function(){return endTime;}
    })
    Object.defineProperty(this, "running", {
    get: function(){return running;}
    })

    Object.defineProperty(this,  "duration", {
        get : function(){return duration}
    })
};

//const sw = new Stopwatch()
//console.log(sw)
//
//StopWatch.prototype.start = function(){
//        if (this.running){
//            throw new Error("Stopwatch is already running")
//        }
//        this.startTime = new Date().getTime();
//        console.log("startTime", startTime)
//        this.running = true
//    };
//StopWatch.prototype.stop = function(){
//        if (!this.running){
//            throw new Error('Stopwatch is already stopped')
//        }
//        this.endTime = new Date().getTime();
//        console.log("endTime", endTime)
//        this.running = false
//        duration += (endTime-startTime)/1000;
//    };
//StopWatch.prototype.reset = function(){
//        this.startTime = null;
//        this.endTime= null;
//        duration = 0;
//        this.running = false;
//    };
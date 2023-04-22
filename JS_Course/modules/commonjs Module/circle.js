const _radius = new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this, radius)
    }

    draw(){
        console.log("COMMONJS : This is from Circle draw() method.")
    }

    get radius(){
        console.log("COMMONJS : This is the circl with radius : ",_radius.get(this))
    }
}


module.exports.Circle = Circle;
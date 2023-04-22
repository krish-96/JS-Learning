const _radius = new WeakMap();

export class Circle{
    constructor(radius){
        _radius.set(this, radius)
    }

    draw(){
        console.log("ES6 : This is from Circle draw() method.")
    }

    get radius(){
        console.log("ES6 : This is the circl with radius : ",_radius.get(this))
    }
}

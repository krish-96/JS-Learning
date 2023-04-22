
function cLog(msg){
    return console.log(msg)
};
cLog('message')

function Circle(radius){
    this.radius = radius;

};

const c1 = new Circle(10)
const c2 = new Circle()

cLog('circle 1 :', c1)

Circle.prototype.toString= function(){
    return "Radius of this circle is : "+this.radius
}

Circle.prototype.whatYouCanDO= function(){
    return `I can provide you Circle with Radius ${this.radius}`
};
cLog(c1.whatYouCanDO())
cLog(c2.whatYouCanDO())

function Shape(color){
    this.color = color;
};
Shape.prototype.duplicate = function(){
    cLog('duplicate')
};

Shape.prototype.duplicate()

function Circle(radius, color) {
//    How to call super method constructor from the child constructor
    Shape.call(this, color);
    this.radius = radius;
};

Circle.prototype.whatYouCanDO= function(){
    return `I can provide you Circle with Radius ${this.radius}`
};

function Square(size){
    this.size = size;
};

//By default Circle.prototype. is created from Object base, but we are going to Overwrite this for the purpose of Inheritance.
//Circle.prototype = Object.create(Object.prototype)
Circle.prototype = Object.create(Shape.prototype)
// newCircle.prototype.constructor() = new Circle();
Circle.prototype.constructor = Circle;

const c = new Circle(10, 'Red')
const s = new Square(20)
















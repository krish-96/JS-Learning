function cLog(msg){
    return console.log(msg)
};


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

////By default Circle.prototype. is created from Object base, but we are going to Overwrite this for the purpose of Inheritance.
////Circle.prototype = Object.create(Object.prototype)
//Circle.prototype = Object.create(Shape.prototype)
//// newCircle.prototype.constructor() = new Circle();
//Circle.prototype.constructor = Circle();


function Square(size){
    this.size = size;
};


////Now we are going to inherit the shape properties to our Shape function
//Square.prototype = Object.create(Shape.prototype)
////resetting the constructor is necessary, Otherwise the constructor will point to the Shape constructor
////Resetting the constructor
//Square.prototype.constructor = Square;
////Now if you observe the console, Our Square also have Shape prototype and constructor is pointing to the Square constructor.

//To avoind the chaining process, we are going to write a function to change the prototype and constructor.
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
//Now are going to comment these few lines for circle and square and calling this function instead
//Circle.prototype = Object.create(Shape.prototype)
//Circle.prototype.constructor = Circle();
//Square.prototype = Object.create(Shape.prototype)
//Square.prototype.constructor = Square;

extend(Circle, Shape);
extend(Square, Shape);

const c = new Circle(10, 'Green')
const s = new Square(20)








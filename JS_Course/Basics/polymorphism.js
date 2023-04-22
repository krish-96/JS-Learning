//Continuing from the last lecture example, Method overriding.

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(){
};

Shape.prototype.duplicate = function(){
    console.log('duplicate')
};

function Circle() {

};

extend(Circle, Shape);

Circle.prototype.duplicate = function(){
    console.log('duplicate  Circle')
};

function Square(){

}

extend(Square, Shape);

Square.prototype.duplicate = function(){
    console.log('duplicate Square')
}
//const s= new Square();
//const c = new Circle()

//Importance  of Polymorphism : If there are 100 method with the same name on different classes, we dont need to call every method separately, we can achieve this as follows
const shapes = [
    new Circle(),
    new Square()
];
for (let shape of shapes){
    shape.duplicate();
}
//We can see the output in console, all the duplicate methods were called, Depending of the type of object that related method will be called.






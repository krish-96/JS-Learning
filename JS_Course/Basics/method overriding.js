//Continuing from the last lecture intermediate function inheritance

function cLog(msg){
    return console.log(msg)
};


function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(){
};

Shape.prototype.duplicate = function(){
    cLog('duplicate')
};

function Circle(radius, color) {

};

extend(Circle, Shape);
//We can override a method by writing the method which we want to duplicate in the prototype.
//So the existing method will be overwritten
//But its very much important to override after extending the method
Circle.prototype.duplicate = function(){
    cLog('duplicate  Circle')
};

//If we wanna use the existing parent method and we wanna arite somemore functionality then we can achive this as follows

Circle.prototype.duplicate = function(){
//    How to access parent methods functionality
    Shape.prototype.duplicate.call(this);
    cLog('duplicate  Circle')
};
//We can call duplicate method on based circle object, then we can see both the functionalities

const c = new Circle()







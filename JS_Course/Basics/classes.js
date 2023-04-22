
//Setter and getter in classes
const _radius = new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this, radius);
    }
    get radius(){
        return _radius.get(this)
    }
    set radius(value){
        if (value <= 0){
            throw new Error("Enter valid Radius!")
            }
        _radius.set(this, value)
    }
}
c = new Circle(10)
console.log('From Setters and Getters : ', c)

// Inheritance

class Shape {
    constructor(color){
        this.color = color;
    }
    move(){
        console.log("Move")
    }
}

class Circle1 extends Shape{
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }

    draw(){
        console.log("Draw")
    }
}

c1 = new Circle1('Red', 500)
console.log('From Inheritance : ', c1)

//Method overRiding

class Shape1{
    move(){
        console.log('Move from Shape class')
    }
}

class Circle2 extends Shape1{
    move(){
        super.move()
        console.log('Move from Circle2 class')
    }
}

c2 = new Circle2()
console.log('From Overriding : ', c2)


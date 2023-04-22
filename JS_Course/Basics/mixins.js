//Inheritance use Is-A relationship and it will cause fragile in whole application
//so to make it independent we  can use Has-A relationship, using Mixins.
//We will write each object separately and we will assign those objects, wherever it required.



const canEat = {
    eat : function(){
        console.log("Eating...");
    }
};

const canWalk = {
    walk : function(){
        console.log("Walking...");
    }
};
function Person(){
}

Person.prototype = Object.assign({}, canEat, canWalk);

const person = new Person();

const person1 = Object.assign({}, canEat, canWalk);

console.log("person constructor", person)
console.log("person1 ",person1)
const canSwim = {
    swim : function(){
        console.log("Swimming...");
    }
};

function GoldFish(){

}

GoldFish.prototype = Object.assign({}, canEat, canSwim);

const goldFish = new GoldFish();
const goldFish1 = Object.assign({}, canEat, canSwim)

console.log(goldFish);
console.log("goldFish constructor", goldFish)
console.log("goldFish1 ",goldFish1)

//instead of assigning all the objects everytime, we are writing to a function, so that we can call everytime.
function mixin(target, ...sources){
    return Object.assign(target, ...sources)
}

//After writing all the functionality to a function
const person2 = mixin({}, canEat, canWalk);
const goldFish2 = mixin({}, canEat, canSwim)

console.log("goldFish2", goldFish2);
console.log("person2", person2);

// //function Declaration

// // walk()
// // function walk(){
// //     console.log('walk');
// // };


// // // Name Function Expression
// // let named = function hello(){
// //     console.log('hello')
// // };

// // // Function Expression
// // let run = function(){
// //     console.log('run')
// // };

// // run();
// // let move=run;
// // move()

// // ---------------------2----------------
// // =========== HOISTING ======
// // walk()
// // function walk(){
// //     console.log('walk');
// // };

// // ----------------------3--------------------
// // ====================Arguments ===============

// // function sum(){
// //     console.log(arguments)
// //     let total=0;
// //     for (let value of arguments){
// //         total+=value;
// //     }
// //     return total;
// // };

// // console.log(sum(1,2))
// // console.log(sum(1))
// // console.log(sum(1,2,3,4,5))

// // ----------------------4--------------------
// // ====================Arguments ===============
// // function sum(...args){ //... rest operator
// //     console.log(args)
// //     return args.reduce((a,b)=>a+b);

// // };

// // console.log(sum(1,2))
// // console.log(sum(1))
// // console.log(sum(1,2,3,4,5))

// // function sum(discount, ...prices){ //... rest operator
// //     const total = prices.reduce((a,b)=>a+b);
// //     return total*(1-discount)
// // };
// // console.log(sum(0.1, 20, 30))


// // ----------------------5--------------------
// // ====================Default Parameter ===============

// // function interest(principal, rate=3.5, years=5){
// //     // rate = rate || 3.5
// //     // years = years || 5
// //     return principal * rate/ 100 * years
// // };

// // console.log(interest(10000));

// // ----------------------6--------------------
// // ====================Setter and Getter method ===============
// // const person = {
// //     stName:'Krishna',
// //     tName : 'B',
// //     get fullName (){
// //         return  `${person.stName} - ${person.tName}`
// //     },
// //     set fullName (value){
// //         const parts = value.split(' ')
// //         this.stName =parts[0];
// //         this.tName =parts[1];
// //     }
// // };

// // // console.log(`${person.stName} - ${person.tName}`)
// // console.log(person.fullName)
// // person.fullName = 'gopi krishna king';
// // console.log(person)

// // We cant cange the full name property from outside
// // and If we wanna chamge first name and last name from outside the function it will effect the full name function toooo

// // This is where getter and setter methods wil come into the Picture

// // getters => access the properies
// // setters => change (mutate) them



// const person = {
//    firstName:'Gopi',
//    lastName:'Krishna',
//    get fullName(){
//        return `${person.firstName} ${person.lastName}`
//    },
//    set fullName(name){
//        if (typeof name !== 'string')
//            throw new Error('Please Provide a valid Name in String Format');
//        nameList=name.split(' ')
//        if (nameList.length !==2)
//        throw new Error('Please Provide a valid Name in String Format Not Empty');
//        person.firstName=nameList[0],
//        person.lastName=nameList[1]
//    }
// };

//person.fullName='B Logitha'
//
//try{
//    person.fullName=''
//
//}
//catch(e){
//    alert(e)
//}
//console.log(person)


// function start(){
//     console.log('Start')
// };
// function stop(){
//     console.log('Stop')
// };

// start();
// stop();



//
//
//// OOPS -----> related
//
//const a={
//    firstName:'Gopi',
//    laststName:'Krishna',
//    surName:'Belamkonda',
//};
//
//consoleLog(a)
//
//fullName(a)
//function consoleLog(msg){
//    for (let key in msg){
//        console.log(key)
//    }
//}
//
//function fullName(obj){
//    for (let key in obj){
//        consoleLog(obj[key])
//    }
//}

//const person = {
//    name : 'gopi',
//    height_weight : {
//        height : 172,
//        weight : 75
//    }
//};

////FActory function
//function personFun(name, height, weight){
//    return {
//        name ,
//        height_weight : {
//        height : 172,
//        weight : 75
//        }
//    }
//}

//gopi_person = personFun('gopi',170, 70)
//console.log(gopi_person);
//
//// Constructor function
//function PersonCon(name, height, weight){
//    console.log('this', this)
//    this.name = name;
//    this.height = height;
//    this.weight = weight;
//}

//har_person = new PersonCon('harshitha', 150, 46)
//logitha_person =new  PersonCon('logitha', 75, 9)
//console.log(har_person)
//console.log(logitha_person)

//
// let pets =  ["Cat", "Dog", "Hamster"];
//pets["species"] = "mammals";
//
// for (let pet in pets) {
//   console.log('(let pet in pets) ', pet); // "species"
// }
//
//for (let pet of pets) {
//    console.log(' (let pet of pets)', pet); // "Cat", "Dog", "Hamster"
//}
//
// let pet =["Cat", "Dog", "Hamster"];

// console.log(pet.reverse())
// console.log(pet.sort())


// function display(item){
// console.log(item)
// };

// pet.forEach(display)

// for(i=0; i<pet.length ; i++){
//    console.log(pet[i])
// };



// // Property Descriptor
// let person = {'name':'Gopi'};

// console.log(person)
// console.log(Object.keys(person))

// Object.defineProperty(person, 'name', {
//     writable:false,
//     configurable:false,
//     enumerable:false
// })


// person.name = "Krishna"
// console.log(person)
// console.log(Object.keys(person))

// delete person.name
// console.log(person)

//Constructor Prototypes
// Every object has a prototype of parent/Base/super object.
// Constructor also have a prototype

// Object, Array,  


// Prototype Vs instance Member
// Instead of having multiple copies, we can define few methods in the prototype
// so that we dont face any memory problems.

// Instance Members
function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log("Draw")
    }
};

let c1 = new Circle(1)
let c2 = new Circle(2)


// Prototype Members

function Circle(radius){
    this.radius = radius
    
};

Circle.prototype.draw =function(){
    console.log("Draw")
}
let c3 = new Circle(1)
let c4 = new Circle(2)

// goto Chrome dev tools and check the diff

// we can use toString method from Chrome str, WE can define something like str()

Circle.prototype.toString = function(){
    return 'Circle with radius '+ this.radius
}


function totalName(name){
    // let firstName, lastName='';
    if (typeof name!=='string')
        throw new Error("Please Give a valid Name ");

    this.name = name.split(' ')
    if (this.name.length!==3)
        throw new Error("Please Give Full Name with space in between");

    this.firstName = this.name[0]
    this.lastName = this.name[1]
    this.surName = this.name[2]
    console.log(this.name)

    this.combinedName= this.name.reduce((a,b)=>a+b)

    this.display = function(){
        return `=> First Name : ${this.firstName}
=> Middle Name : ${this.lastName}
=> Last Name : ${this.surName}
=> Combined Name : ${this.combinedName}
` 
    }
};

let tN = new totalName('Gopi Krishna Belamkonda')
console.log(tN.display())

// try{
//     let tN1 = new totalName('gopi')
//     console.log(tN1.display())
// }
// catch(e){
//     console.log(e)
// }












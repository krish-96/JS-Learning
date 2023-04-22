// console.log("This is from Index.js");

// let name='padma';
// let age = '54';

// let person={
//     'name':'Gopi',
//     'age' : '26'
// };

// let hour = 23;
// console.log(hour.getTime);
// // Greeting based on the Time

// if (hour>=6 && hour <12){
//     console.log('Good morning!')
// }
// else if (hour>=12 && hour<=18){
//     console.log('Good Afternoon')
// }
// else {
//     console.log('Good Evening!')
// }

// // Switch and Case 
// let role;
// switch (role){
//     case 'guest':
//         console.log('Guest User');
//         break;
    
//     case 'moderator':
//         console.log('Moderator User');
//         break;
    
//     default:
//         console.log('Unknown User')
// } // If we are comparing with the boolean values then if-else stmts will makes good sense

// // For loop
// console.log('Odd Numbers with in 10')

// for (let i=0 ; i<10; i++){
//     if (i%2 !==0){
//         console.log(i)
//     }
// };

// //while loop
// let i=1;
// let evenNumbers = []
// console.log('Even Numbers with in 10')
// while (i<=10){
//     if (i%2 === 0){
//         console.log(i)
//     }
//     i++
// }

// //do while

// i =100;

// do {
//     console.log('Value is :', i);
//     i--;
// } while (i>=98);


// //Infinite loop
// // i=0;

// // while(i<5){
// //     console.log(i)
// //     //i++
// // }

// // while (true){

// // }
// // let x=0;
// // do {
// //   //x++
// // } while(x<5);


// // for(let i=0; i<10; ){
// //     console.log(i)
// // }


// //for in
// const personDetails = {
//     name : 'Krishna',
//     age : 26
// };

// for (let key in personDetails){
//     console.log(key,' : ', person[key])
// }

// let animals = ['lion', 'elephant', 'Tiger'];

// for (let index in animals){
//     console.log(index, animals[index])
// }


// // for of

// for (let animal of animals){
//     console.log(animal)
// }

// // break and continue

// i=0;

// while()


// function CreateCircle(radius){
//     this.radius=radius,
//     this.draw = function(){
//         console.log('Constructor Draw')
//     }
// };

// const circle1 = new CreateCircle(1);
// circle1.draw()


// function createCircle(radius){
//     return {
//         radius,
//         draw() {
//         console.log('Factory method Draw')
//         }
//     };
// };

// const fCircle=createCircle(1)
// fCircle.draw()

// circle1.color = 'RED'
// circle1.model = 'New'

// delete circle1.color
// console.log(circle1)
// delete circle1.model
// console.log(circle1)




// const vegetables ={
//     'carrot':20,
//     'mirchi':10
// };

// for (let key in vegetables){
//     console.log(key, vegetables[key])
// }


// for (key of Object.keys(vegetables)){
//     console.log(key)
// }

// for (entry of Object.entries(vegetables)){
//     console.log(entry)
// }


// if ('carrot' in vegetables){
//     console.log('YES')
// }else{
//     console.log('NO')
// }

// let oldVegetables = {}

// for (let key in vegetables){
//     oldVegetables[key] = vegetables[key]
// }
// vegetables.carrot = 500;
// console.log(oldVegetables)
// console.log(vegetables)

// const objectVegetables = Object.assign({}, vegetables)
// console.log('objectVegetables==>',objectVegetables)

// const cloneVegetables = { ...vegetables };
// console.log('cloneVegetables-->',cloneVegetables)
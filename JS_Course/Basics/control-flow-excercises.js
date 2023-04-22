// ==== Maximum of two numbers

// function max(num1, num2){
//     this.num1=num1
//     this.num2=num2
//     if (this.num1>this.num2)
//         return this.num1
//     else
//         return this.num2
// }

// function max(num1, num2){
//     return maxNumber= (num1>num2) ? num1 : num2
//     // if (this.num1>this.num2)
//     //     return this.num1
//     // else
//     //     return this.num2
// }

// console.log("max : ", max(2,3))
// console.log("max : ", max(-10,10))
// console.log("max : ", max(-1,-2))
// console.log("max : ", max(100,1))

//---------------------------------------------------------
// ==== Portrait or LAndscape

// function portraitOrLandscape(height, width){
//     return display=(height>width)? 'Portrait':'Landscape'
// }

// function isLandscape(height, width){
//     return (width>height);
// }

// console.log(portraitOrLandscape(40,20))
// console.log(portraitOrLandscape(-10,20))
// console.log(portraitOrLandscape(-20,-20))
// console.log(portraitOrLandscape(20,-20))

//---------------------------------------------------------
//==== FizzBuzz 

// function fizzBuzz(number){
//     if (typeof number === 'number'){
//         if ((number%3===0) && (number%5===0))
//             return 'FizzBuzz'
//         else if (number%3===0)
//             return 'Fizz'
//         else if(number%5===0)
//             return 'Buzz'
//         else 
//             return number
//     }
//     else {
//         return 'Not a number'
//     } 
// }


// function fizzBuzz(number){

//     if (typeof number !== 'number')
//         return 'Not a number'
//     if ((number%3===0) && (number%5===0))
//         return 'FizzBuzz'
//     else if (number%3===0)
//         return 'Fizz'
//     else if(number%5===0)
//         return 'Buzz'
//     else 
//         return number
    
//     return 'Not a number'
    
// }


// console.log('3',fizzBuzz(3))
// console.log('5',fizzBuzz(5))
// console.log('3&5',fizzBuzz(15))
// console.log('!3&5',fizzBuzz(8))

//---------------------------------------------------------
// ======= Demerit points

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed >= speedLimit+kmPerPoint){
//         let diff = speed-speedLimit;

//         const points = Math.floor(diff/kmPerPoint);
//         if (points>=12) {
//             return 'License suspended'
//         }
//         return points
        
//         }
//     else
//         return 'ok'
// }


// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit+kmPerPoint){
//         return 'ok';
//     }
//     let difference = speed-speedLimit;

//     const points = Math.floor(difference/kmPerPoint);
//     if (points>=12) {
//         return 'License suspended'
//     }
//     return points
//     }


// console.log(checkSpeed(50))



//---------------------------------------------------------
// ======= Even and Odd Numbers


// function evenOrOdd(limit){
//     for (let i=0; i<=limit; i++){
//         if (i%2!=0)  console.log(i, "ODD")
//         else console.log(i, "EVEN")
//     }
//     // let i=0 
//     // while (i<=limit){ 
//     //     if (i%2!=0) 
//     //         console.log(i, "ODD") 
//     //     else 
//     //         console.log(i, "EVEN") 
//     //     i++ 
//     // } 
// } 

// evenOrOdd(10)


//---------------------------------------------------------
// ======= Count of Truthy

// function countTruthy(array){
//     let count=0;
//     for (let value of array){
//         if (value){
//             count++
//         }
//     }
//     console.log('Truthy count :',count)
// }
// countTruthy([1,2,3,'', false, NaN])


//---------------------------------------------------------
// ======= string properties

// function showProperties(obj){
//     for (let index in obj)
//         if (typeof obj[index]==='string') 
//             console.log(index,obj[index])
// };

// const movie={
//     'title':'b',
//     'releaseYear':2018,
//     'director':'c'
// };

// showProperties(movie)


//---------------------------------------------------------
// ======= sum of the multiples of 3 & 5 in the limit inclusive


// function sum(limit){
//     let total=0;

//     for(let i=0 ; i<=limit; i++)
//         if (i%3 === 0 || i%5 === 0)
//             total += i
        
//     console.log(total)
// }

// sum(15)


//---------------------------------------------------------
// ======= Grade of a student

// const marks=[80, 80, 70];

// function grade(score){
    
//     const calculateAverage = average(score)

//     if (average < 60) return "F";
//     if (average < 70) return "D";
//     if (average < 80) return "C";
//     if (average < 90) return "B";
//     return "A";
// }

// function calculateAverage(array){
//     let total = 0;
//     let average = 0;

//     for (let value of array)
//         total += value
    
//     average = total/array.length;

//     return average;
// }
// console.log(grade(marks))

//---------------------------------------------------------
// ======= stars

// function showStars(row){
    
//     for (let i=1; i<=row ; i++) {
//         let pattern = ''  
//         for (let j=1; j<=i; j++)
//             pattern +='*'

//     console.log(pattern)
//     }
// }

// showStars(5)

//---------------------------------------------------------
// ======= showPrimes

// function showPrimes(limit){
    
//     for (let num =2; num<=limit; num++){

//         if (isPrime(num))
//         console.log(num)
//     }
// }
// function isPrime(number){
//     let isprimeNumber = true;

//     for (let i=2; i<number; i++){
//         if (number%i === 0){
//             return false;
//         }
//     return true;
// }
// }

// showPrimes(20)
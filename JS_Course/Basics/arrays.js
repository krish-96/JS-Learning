
// Adding Elements to an Array
// const numbers = [3, 4]
// // adding element at last
// numbers.push(10)
// console.log(numbers)
// // adding element at beginning
// numbers.unshift(0,1,2)
// console.log(numbers)
// // adding elements at the end of an array
// numbers.splice(4, 0, 'abc', 'deb')
// console.log(numbers)

//  Finding elements in an array

// let numbers = [1, 2, 3, 1, 4]
// console.log(numbers.indexOf(1))

// console.log(numbers.lastIndexOf(1))
// console.log(numbers.indexOf(1)!==-1)
// console.log(numbers.includes(1))
// // All methods will accept 2nd argument -> from where to start
// console.log(numbers.indexOf(1, 2))

// const courses = [
//     {id:1, name:'a'},
//     {id:2, name:'b'},
// ]

// console.log(courses.includes({id:1, name:'a'}))
// const course = courses.find(function(course){
//     return course.name === 'a'
// });

// console.log(course)

// let numbers = [1,4,5,2,3,2]
// console.log(numbers.indexOf(3))
// console.log(numbers.includes(3))
// console.log(numbers.lastIndexOf(2))

// const course = courses.find(course=> course.name === 'a');

// console.log(course)

// // Arrow function
// // For the above example we can write an arrow function as follows
// const course = courses.find(course => course.name === 'a');
// // We can read the above as : course goes to course.name isequal to 'a'
// console.log(course)


// const numbers = [1, 2, 3, 4, 10]

// // End
// const last = numbers.pop()
// console.log('last : ',last)
// // Beginning
// const first = numbers.shift()
// console.log('first', first)
// // Mid
// numbers.splice(2, 1)
// console.log()


let l = [1,2,3,4,5,6,7,8]
l.push(1000)
// console.log(l.pop()) // end
// console.log(l)
// console.log(l.shift())  // start
// console.log(l)
// l.splice(2,4) //
// console.log(l)

// splice method will remove number of specified elements after the start index

// let another = l

// sol-1
// l=[]
// sol-2
// l.length=0
// sol-3
// l.splice(0, l.length)
// sol-4
// while(l.length>0){
//     l.pop();
// }


/// Best sol is 2 or 1


// console.log(l)
// console.log(another)


// // combine and slicing an array
// const first = [1,2,8,3];
// const second = [4,5,6];

// const combined = first.concat(second)
// console.log(first)
// console.log(second)
// console.log(combined)

// let slice = combined.slice(1, 4)
// console.log(slice)

// const combined = [...first, ...second]
// console.log(combined)

// for (let number of combined){
//     console.log(number)
// };

// combined.forEach(function(number){
//     console.log(number)
// })

// combined.forEach(number=> console.log(number));


// // join the elements in an array
// let joined = combined.join(',');
// console.log(joined)

// const message = 'This is my first message';
// let list = message.split(' ')
// console.log(message)
// console.log(list)
// let mymsg = list.join('-')
// console.log(mymsg)

// let anyText = 'gopi krishna belamkonda';
// console.log(anyText.split(' ').join('-'))


// // when we have numbers or string then obly the following wil work.
// combined.sort();
// console.log('sort', combined)
// combined.reverse();
// console.log('reverse', combined)


// const courses = [
//     {id:1, name:'Node'},
//     {id:1, name:'java'}
// ];

// console.log(courses)
// courses.sort(function(a, b){
//     //if a<b ==> -1
//     //if a>b ==1
//     //if a==b=b ==>0

//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();


//     if (nameA< nameB) return -1;
//     if (nameA> nameB) return 1;
//     return 0;
// })
// console.log(courses)

// every() and some()

// const allPositive = combined.every(function(value){
//     return value>=0;
// })
// console.log('allPositive : ', allPositive)

// const atLeastOnePositive = combined.some(function(value){
//     return value>=0;
// })
// console.log('atLeastOnePositive : ', atLeastOnePositive)

// combined.push(-2)
// const atLeastOnePositive = combined.some(function(value){
//     return value=0;
// })
// console.log('atLeastOnePositive : ', atLeastOnePositive)

// console.log(combined)

// // for (let num of combined){
// //     if (num>=0){
// //         console.log(num)
// //     }
// // }

// const filtered = combined.filter(value => value>=0);
// console.log(filtered)
// const items = filtered.map(n=>'<li>'+n+'</li>');
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(items)
// console.log(html)



// // displaying numbers in the given Range
// const numbers = arrayFromRange(1, 9);

// console.log(numbers)

// function arrayFromRange(min, max){
//     let numbers = []
//     while(min <= max){
//         numbers.push(min)
//         min += 1
//     }
//     return numbers
// }

// // excluding the numbers from array
// const numbers = [1,2,3,4,1,2,1, 5]

// const output = except(numbers, [1])

// console.log(output)

// function except(array, excluded){
//     let output=[];

//         for(let element of array){
//             if (!excluded.includes(element))
//                 output.push(element)
//         }    
//     return output
// };


// // implementing include method
// const numbers = [1,2,3,4,5];

// console.log(includes(numbers, 5))

// function includes(array, searchElement){
//     for(let element of array)
//         if (searchElement===element)
//         return true

//     return false
// };


// // implementing move function
// const numbers = [0,1,2,3,4,5,6];
// const output= move(numbers, 5, -5);
// console.log(output);

// function move(array, index, offset){

//     let position = index+offset;
//     if (position>=array.length || position<0){
//         console.error("Invalid Offset Value")
//         return;
//     }
//     let output = [...array];
//     let element = output.splice(index, 1)[0];
//     output.splice(index+offset, 0, element)
//     return output
// }


// // implementing the function to know no of occurances

// const numbers = [6,1,2,3,6,5,6];
// const count = countOccurrences(numbers, 6);
// console.log(count);

// function countOccurrences(array, searchElement){
//     // let count =0;
//     // for (let i=0; i<array.length; i++){
//     //     if (array[i] == searchElement)
//     //         count++
//     // }
//     // return count

//     return array.reduce((accumulator, current)=>{
//         const occurance = (current===searchElement)? 1:0;
//         return accumulator+occurance
//     }, 0)

// }



// // implementing get max functin to get maximum element in the array
// // const numbers = [6,1,2,3,6,5,6, 0];
// const numbers = [];

// const max = getMax(numbers);
// console.log(max);

// function getMax(array){
//     if (array.length === 0) return undefined;
    
//     // let max=array[0];
//     // for (let i=0; i<array.length; i++)
//     //     if (array[i] > max) max=array[i]
//     // return max


//     return array.reduce((accumulator, current)=>{
//         return  (accumulator>current)? accumulator:current;
         
//     },array[0]);

// }



// movies

const movies = [
    {title:'a', year:2018, rating:4.5},
    {title:'b', year:2018, rating:4.1},
    {title:'c', year:2017, rating:4.6},
    {title:'e', year:2018, rating:5},
    {title:'d', year:2018, rating:4.3},
    {title:'f', year:2018, rating:4.1},
    
];
 

// All the moviees with rating 4
// descenting order with rating
// descing order
// Pick title and display in the console

const movies2018 = movies
.filter(movie=>movie.year===2018 && movie.rating>=4)
.sort((a,b)=>a.rating-b.rating)
.reverse()
.map(movie=>movie.title)

console.log(movies2018)


const numbers = [1,2,3,4,43,-1];
const max = getMax([]);
console.log(max)
function getMax(array){
    if (array.length === 0) return undefined;
    return array.reduce((a, c)=>{
        return (a>c)? a : c
    },0)
};
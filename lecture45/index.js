// console.log("vamshi");
// //works
// sayMyName("vamshi");
// function sayMyName(finalName){
//     console.log(finalName);
// }
// // sayMyNamee("vamshi");
// // let sayMyNamee = function(finalName){
// //     console.log(finalName);
// // }

// console.log(age);
// {var age = 25;}//just move //var age;

// //class hosting

// class Human{
//     name="vamshi";
//     age = 5
// }
// let obj1 = new Human();

//  function greet(){
//     console.log("hello hi namaste"); 
// }
// function greetMe(greet,fullName){
//     console.log("hello",fullName);
//     greet();
    
// }
// greetMe(greet,"vamshi")

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);


const arr = [
    //0 index
    function(a,b){
        return a+b;
    },
    //1 index
    function(a,b){
        return a-b;
    },
    //2 index
    function(a,b){
        return a*b;
    }
];

let first = arr[2];
 let ans1 = first(2,3);
 console.log(ans1);
 

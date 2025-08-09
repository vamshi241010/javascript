//for loops

let arr = [10,20,30]
// arr.forEach((value,index)=>{
// console.log(value,index);

// });
// let obj = {
//     name:"vamshi",
//     age : 18,
//     height : "5feet 7in",
//     greet:function(){
//         console.log("hello ");
        
//     }
// }
// for( key in obj){
//     console.log(key);
    
// }

// for(let value of arr){
//     console.log(value);
    
// }
for(num in arr){
    console.log(num);
    
}

for(num in arr){
    if(num==3)break
    else console.log("loop completed",num);
}
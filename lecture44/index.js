console.log("babbar");
let obj = {
    name:"vamshi",
    age : 18,
    height : "5feet 7in",
    greet:function(){
        console.log("hello ");
        
    }
}
console.log(obj.greet())

let arr = [1,2,3,4,5];//
console.log(arr);
let arr2 = new Array(1,2,3,4,5)
console.log(typeof arr);
console.log(typeof arr2);
console.log(arr[1]);

//built in methods
arr.push(2);
console.log(arr);
arr.pop(2);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);
arr.slice(2,4)
console.log(arr.slice(2,4));
arr.splice(1,2,7)
console.log(arr);

let ans = arr.map((number)=>{
    return number*number;
})
console.log(ans);

 let evenArray =  arr.filter((number)=>{
    if(number%2==0){
        return true;
    }
    else return false;
})
console.log(evenArray);

let arr3 = [1,2,'love','kunal',null];
let ans1 = arr3.filter((value)=>{
    if(typeof(value)=='number'){
        return true
    }
    else return false
});
console.log(ans1);

let arr4 = [10,20,30,40];

let ans3 = arr4.reduce((acc,curr)=>{
    return acc+curr;
},0/*acc value*/)
console.log(ans3);

let arr5 = [9,1,2,4]
arr5.sort((a,b)=>b-a);
console.log(arr5);
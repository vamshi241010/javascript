console.log("babbar");
function sayMyName(){
    console.log("vamshi");
}

//function usage
sayMyName();

function print(n){
    if(n==5)return;
    console.log(n);
    print(n+1);
}
print(1);


function getSum(a,b,c){
    let sum = a+b+c
    return sum
}
console.log(getSum("a",2,3));

function getMultiplication(a,b){
    return a*b;
}
//OR

let solve = function(a,b){
return a*b;
}
solve(2,20);
console.log(solve(2,20))
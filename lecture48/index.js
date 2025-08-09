let src = {
    name :"vamshi",//key:value
    age : 18,
}
let src2 = {
    name :"vamshi",//key:value
    age : 18,
}
// console.log(obj);
// obj.color = "white"
// console.log(obj);

// let dest = {...src};
// console.log(src);

let dest = src;
console.log(dest.age);
dest.age = 134;
console.log(dest.age);//it is shallow copy if we change dest it will make change in src also 
console.log(src.age);
// lets look upon deep copy or make a duplicate of src which will not act on it
console.log('hey wait');
let dest1 = {...src};
console.log(src.age);
console.log(dest1.age);


console.log('hey welcome');
dest1.age = 234;
console.log(src.age);
console.log(dest1.age);

console.log("welcome to the next one");
let dest2 = Object.assign({},src);//=> assign the src object into the empty braces({})
console.log(dest2);

//OR

let dest3 = Object.assign(src,src2);//clone src and src2
console.log(dest3);

console.log("next one");

let dest5 = {};
for(let key in src){
    let newKey = key;
let newValue = src[key];
//insert new key and value in dest and create a object
dest5[newKey] = newValue;
}
console.log(dest5,"hiiiii");


class Human{
    //properties
    age =30;
    #height = 180;
    #weight = 80;

    //behaviour 
    walking(){
        this.#height = 23;
        console.log(this.#height);
        
        console.log("i am walking");
    }
    running(){
        console.log("i am running"); 
    }
    get fetchWeight(){
        return this.#weight;
    }
    set modifyWeight(weight){
        this.#weight = weight;
    }
}
let a = new Human();
a.walking();
// a.weeight(2);

function setName(name = "johny")/*if noparameter is passed then johny will be the default name*/{
    console.log(name);
}
setName('Vamshi');




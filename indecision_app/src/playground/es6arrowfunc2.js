
let add = (a,b)=>{
    console.log(a,b);
    return a+b;
}

console.log(add(43,23));

const user = {
    name:"Vijay",
    cities:['Blore', 'Chn', 'Hyd'],
    printPlacesLived: function(){

        /* If we make the function inside the forEach to be a normal es5 function,
        it will not understand this.name i.e. it will not recognise the object that
        'this' is bound to.
        
        When made as an arrow function, what the arrow function does is it searches
        for a 'this' one scope higher, and finds the user. Hence it works.
        
        Now, if we make printPlacesLived as an arrow function, it will not understand
        the 'this' keyword, and search one scope higher, which is the global scope.
        And due to this it will throw an error. So printPlacesLived should be left as
        an es5 function.
        */

        this.cities.forEach((city)=>{
            console.log(this.name + ' lived in ' + city)
        });
        
        return this.cities.map((city)=>this.name + ' lived in ' + city);
        
    }
    // es6 has allowed for this format:
    /* 
    Instead of printPlacesLived: function(){}, we can do this:
    
        printplacesLived(any_arguments_if_needed){
            ...
        }
    */
}

let cityMessages = user.printPlacesLived()
console.log(cityMessages)

const multiplier = {
    numarray : [1,2,3,4,5],
    factor : 3,

    multiplyBy(number){
       return number*this.factor;
    },
    
    multiply(){
        return this.numarray.map((num)=>this.multiplyBy(num));
    }
};

console.log(multiplier.multiply());

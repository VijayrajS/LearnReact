class Person {
    constructor(name, location='Unkown'){
        this.name = name;
        this.location = location;
    }
    
    getGreeting(){
        return "Hello " + this.name;
    }
}

class Student extends Person{
    constructor(name, location, major){
        super(name, location);
        this.major = major;
    }
}

const me = new Student('Vijay', 'AC', "compsci");
console.log(me);

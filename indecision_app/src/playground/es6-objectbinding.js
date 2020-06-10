const obj = {
    name: "Vikram",
    getName(){
        return this.name;
    }
}

// Case 1
console.log(obj.getName()); //This works

// Case 2
//const getName = obj.getName;  // Making a reference to the getName function
//console.log(getName()); // This won't work

/* In case 1, getName ran in the context of the object obj, but when we break
   the function out in case 2, we lose the 'this' binding.
*/

// To fix it call the bind function as shown below
// Case 3 (works)
const getName = obj.getName.bind(obj) // bind brings the context back, restoring the binding
console.log(getName());



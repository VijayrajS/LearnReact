function square(x){
    return x**2;
}

// const cubeArrow = (x)=>{
//     return x**3;
// };

const cubeArrow = (x)=> x**3;

console.log(square(8));
console.log(cubeArrow(8));

const getFirstName = (name)=>name.split(' ')[0];
console.log(getFirstName("Mike Wazowsky"));

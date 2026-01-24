console.log("hello");
const h1 = document.querySelector(".heading")
function hello() {
    h1.innerHTML="Hello javascript"
    
}
hello()


// Variable Scoping //c

let a = "Ahsan "
function globalscop() {
    // console.log(a);
    
    
}
console.log(a);


globalscop()
// global scope Assessable anywhere in the file
let b = "Hello "
function functionscope() {
    const message = "Ahsan"
    // console.log(b,message);
    
}
// console.log(message);
functionscope()

if (true) {
    let name = "Ahsan"
    const age = 20
    console.log(name,age);44
}

    

// Closure //c

// lexical scoping //c

// IIFE //c

// Object Methods (keys,values,freez,entries) //c

// Exponentiation Operator //c

console.log(2 ** 10);
console.log(2*2*2*2*2*2*2*2*2*2);



// Optional chaining //c

const user = {
    profile : {
        setting: {
            theme:{
                color: "dark"
            }
        }
    }
}
console.log(user.profile.setting.theme.color);
        

// Destructuring //c

// Template literals //c

// Destructuring //c

// Default parameters //c

// Rest parameter //c

// Spread Operator //c

// Arrow functions //c

// Enhanced object literals //c


// Iterators & For..of //c

// Map //c

// Array methods //c

// Higher-order function //c

// CallBack //c

// Promises //c

// Ternary Operator //c

// modules // firebase ma prhainga

// console.log("hello world");

// function scope

// block scope
// testing

// Type Aliases: Creating our own Type
type Programmer = {
    name: string,
    skills: string[]
}

const dylan: Programmer = {
    name: 'dylan',
    skills: ['python', 'github', 'flask'] 
}
// Union Types: Can allow a variable to be one of many types (number | string)
function kgToLbs(weight: (number | string)): number{
    if (typeof weight === 'number'){
        return weight * 2.2
    }
    return Number(weight) * 2.2
}

// TypeScript Arrow Function



// Literal Types (exact)



// Nullish Coalescing Operator (??): We can fallback to a default value when dealing with null/undefined objects



// Type Assertions: specify a different type than the one inferred by the compiler.
// NOTE: There isn't any type conversion happening under the hood.



// Creating Classes
class Cohort {
    constructor(
        
    )
}
// typeof vs instanceof


// private properties and accessing them


// Interfaces vs Types
/* They both establish a shape of an object and can be used interchangeably BUT 
Its more conventional to implement Interfaces with Classes AND
Interfaces can also inherit from other Interfaces & Types, while Types cannot.
*/

// interface MUST be an object
# Mobile App Development - Javascript/React Native

## Table of Contents

- [Conditional Statements](#conditionals)
- [Loops](#loops)
- [Functions](#functions)
- [Variable Environments](#variables)
- [Acknowledgements](#acknowledgements)

### Conditionals

### Loops

### Functions

//==========================================
//== **Variable Environments: Hoisting** ==
//==========================================

**Hoisting** makes some types of variables accessible/usable in the code before they are actually declared
// **Before execution**, code is scanned for variablke declarations, and for each variable, a new property is created in the **variable environment object
// So:
// _Function declarations_ are **Hoisted**, have an _initial value_ of **Actual Function**, and are **block-scoped**
// _var variables_ are **Hoisted**, have an _initial value_ of **undefined** and are **function-scoped**
// _let_ and _const_ variables are **NOT HOISTED**, have an _initial value_ of **UNINITIALIZED/TDZ (_Temporal Dead Zone_), and are **block-scoped**
// We can call the test() function before it was declared in code; that's the hoisting in practice.
// The JavaScript engine scans the code before executing it and creates a property for each variable or function in the code
// For normal variables, it assigns an undefined value, and for functions it assigns a reference to that function in memory
// That's why we can call a function, but if we try to access a variable, we will get undefined

// function scope() {
// console.log(var1); // undefined
// console.log(va1); // undefined

// var var1 = 'Hello';
// var var2 = 'Hi';
// }

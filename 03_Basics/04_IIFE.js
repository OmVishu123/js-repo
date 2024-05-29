// IIFE : Immediately Invoked Function Expressions
// Syntax~ (Definition)(execution_call)
//we have to terminate(with ;) IIFE , since it does not know where to stop

/**********NAMED IIFE*************/ 
(function chai() {
    console.log(`DB CONNECTED`);
})();

/************SIMPLE IIFE*****************/ 
((name )=>{
    console.log(`DB CONNECTED TO ${name}`);
})('OM')


//************Jvascript Execution Context*************/
// Global Execution context
//Functional Execution context
//Eval execution context ~ A property of global EC (used in mongoDB)

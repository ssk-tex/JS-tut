/* 
    Code Editor:
        1. Microsoft --> VS Code
        2. JetBrains --> Fleet
        3. Sublime Text
*/

/* 
    JS environment --> 
        1. node.js  [Developer: Ryan Dahl, OpenJS Foundation, Bryan Cantrill; Initial release date: 27 May 2009]
        2. deno.js  [Developer: Ryan Dahl; Initial release date: 13 May 2018]

*/

/* 
    To execute .js file in terminal --> node 'filename.js'
*/

/* ----------------------- GIT HUB --------------------------------- */
// console.log('Hello Sir');  /* tesing on git desktop */

/* --------------------------- Variables ------------------------------- */

/* 
    Variables keywords --> 
        1. const [ constant declaration, once a value set, can not change the value ]
        2. let [ variable declaration ]
        3. var [ Prefer not to use 'var' keyword, because od issue in block scope & functional scope ]
*/

// const Id = 123;
// let email = 'abc@email.com'
// var password = 'abc123'
// city = 'kolkata' /* Not Allowed for declaration of variable */
// Id = 3; /* Not Allowed For const keyword */

// let state /* declare variable but not assign any value */

// console.table([Id, email,password, city]); /* tabular structure console print */

/* ------------------------- Datatypes -------------------------- */

// "use strict"; /* treat all JS Code as newer version / strict mode */

/* 
    Datatypes --> 
        1. String
        2. Number
        3. Boolean [ true / false ]
        4. Array
        5. NULL [ standalone value ]
        6. undefined 
        7. symbol [ unique ]

        8. Object
*/
// let name = "sunny"      /* string */
// let age = 30            /* number */
// let isLoggedIn = true   /* boolean */

// console.log(typeof null); /* Object */

/* --------------------------- Conversion ------------------------------ */

// let score = "33";
// console.log(typeof score);

// let valueInNumber = Number(score);  /* string to number coversion */
// console.log(typeof valueInNumber);

/* if string is not in pure number then number coversion gives output 'NaN -> Not a Number' */
/* null to number conversion gives output -> 0 */
/* 
    Ex.
        "33" ==> 33;
        "33a" ==> NaN;
        true ==> 1; false ==> 0;
*/

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);  /* Number to Boolean conversion */
// console.log(typeof booleanIsLoggedIn);

/* 
    Ex. 
        1 ==> true
        0 ==> false
        "" ==> false
        "abc" => true
*/

let number = 5;
let stringNumber = String(number);
console.log(typeof stringNumber);
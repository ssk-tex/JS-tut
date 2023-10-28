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

/* let number = 5;
let stringNumber = String(number);
console.log(typeof stringNumber); */

/* ------------------------- Operations ------------------------------------ */

// let str1 = "Hi"
// let str2 = " Sun"
// let str = str1 + str2 /* Concatenation in JS */
// console.log(str);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); /* if first item is string then all item will be trated as string */
// console.log(1 + 2 + "2"); /* if first item is number then first will be donw operations then result will be concatenate with string if string present */

/* --------------------- Prefix & Postfix operator ------------------------------- */

/* If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing. */

/* If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing. */

/* 
    ex. 
        let x = 2
        let y = x++
        console.log(x, y); ----> x = 3; y = 2;

        let x = 2
        let y = ++x
        console.log(x, y); ----> x = 3; y = 3;
*/

// let x = 2
// let y = x++
// let y = ++x
// console.log(x, y);

/* ------------------------- Comparison ------------------------------- */

// "use strict";
// console.log("2" > 1); // output --> true

// console.log(null > 0); // output --> false       /* Not Allowed */
// console.log(null == 0); // output --> false      /* Not Allowed */
// console.log(null >= 0); // output --> true       /* Not Allowed */

/* 
    The reason is that an equality check == and comparisons '> < >= <=' work differently.   
    Comparisons convert null to a number, treating it as 0.
    That's why (null >= 0) ==> 'true and (null > 0) ==> 'false'.
*/

/* 
    Strict Check ==> compare value as well as datatype
*/

// console.log("2" === 2);

/* 
    On the basis of data stored in memory and accesseing of the data,there are 2 types of datatypes
        1. primitive datatype [ Call-by-value ]
            i. string       [ return type --> string ]
            ii. number      [ return type --> number ]
            iii. boolean    [ return type --> boolean ]
            iv. null        [ return type --> object ]
            v. undefined    [ return type --> undefined ]
            vi. Symbol      [ return type --> symbol ]
            vii. bigint     [ return type --> bigint ]

        2. non-primitive / reference datatype [ call-by-reference ]
            i. array        [ return type --> object ]
            ii. object      [ return type --> object ]
            iii. function   [ return type --> function / object function ]
*/

/****************************************************************************************************
    {note}: 
        JavaScript is a 'dynamically typed language', which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


        Typescript is a 'statically typed language'.
        Typescript allows the user to assign a type (like string or number) or can infer the type by how the variable is initialized.

******************************************************************************************************/

// const primeId = Symbol('1');
// const secId = Symbol('1');

// console.log(primeId, secId);
// console.log(primeId == secId); // output ---> false [ due to different / unique value ]

// let ary = ['a', 'b', 'c']
// let obj = {
//     name : 'sunny',
//     age : 30
// }

// const greetFunc = function greet() {
//     console.log("Good Morning");
// }

// console.log(typeof greetFunc);  /* return output ---> function / object function */
// console.log(typeof ary);        /* return output ---> object */
// console.log(typeof obj);

/* ------------------ Memory allocation in JS ---------------------------- */

/* 
    Memory are 2 types:
        1. Stack Memory [ it use in primitive type datatype ] ==> {get copy of the variable}
        2. Heap Memory  [ it use in non-primitive type datatype ] ==> {get reference of the variable}

    ex. 
    Stack Memory --->   let a = 2;
                        let b = a;
                        b = 3;
                        console.log(a, b);   ---> output ==> 2,3

    Heap Memory --->    let userOne = {
                            email : "abc@gmail.com",
                            password: "12345"
                        }
                        let userTwo = userOne;
                        userTwo.email = "xyz@gmail.com"
                        console.log(userOne, userTwo);
    
    ---> { email: 'xyz@gmail.com', password: '12345' } { email: 'xyz@gmail.com', password: '12345' }
*/

/* ------------------------------ string ------------------------------------- */

// let name = "S S";
// let age = 30;

// console.log("I am "+name+", My age is "+age+".");   // String concatenation
// console.log(`I am ${name}, My age is ${age}.`);     // template literal --string interpolation

let userName = new String('sunny');
// console.log(userName.toLocaleUpperCase());
// console.log(userName.anchor('abc'));
console.log(userName.at(3));

/* 
    String Methods -->
        1. length [ to know string length ]
        2. anchor: ƒ anchor() [set anchor tag ] 
                [
                    ex. 
                        let userName = new String('sunny');
                        console.log(userName.anchor('abc'));
                        --> output ==> <a name="abc">sunny</a>

                        string.anchor("name") --> <a name="name">string</a>
                ]
        3. at: ƒ at()
        4. big:ƒ big()
        5. blink:ƒ blink()
        6. bold:ƒ bold()
        7. charAt:ƒ charAt()
        8. charCodeAt:ƒ charCodeAt()
        9. codePointAt:ƒ codePointAt()
        10. concat:ƒ concat()
        11. constructor:ƒ String()
        12. endsWith:ƒ endsWith()
        13. fixed:ƒ fixed()
        14. fontcolor:ƒ fontcolor()
        15. fontsize: ƒ fontsize()
        16. includes: ƒ includes()
        17. indexOf: ƒ indexOf()
        18. isWellFormed: ƒ isWellFormed()
        19. italics: ƒ italics()
        20. lastIndexOf: ƒ lastIndexOf()
        21. link: ƒ link()
        22. localeCompare: ƒ localeCompare()
        23. match: ƒ match()
        24. matchAll: ƒ matchAll()
        25. normalize: ƒ normalize()
        26. padEnd: ƒ padEnd()
        27. padStart: ƒ padStart()
        28. repeat: ƒ repeat()
        29. replace: ƒ replace()
        30. replaceAll: ƒ replaceAll()
        31. search: ƒ search()
        32. slice: ƒ slice()
        33. small: ƒ small()
        34. split: ƒ split()
        35. startsWith: ƒ startsWith()
        36. strike: ƒ strike()
        37. sub: ƒ sub()
        38. substr: ƒ substr()
        39. substring: ƒ substring()
        40. sup: ƒ sup()
        41. toLocaleLowerCase: ƒ toLocaleLowerCase()
        42. toLocaleUpperCase: ƒ toLocaleUpperCase()
        43. toLowerCase: ƒ toLowerCase()
        44. toString: ƒ toString()
        45. toUpperCase: ƒ toUpperCase()
        46. toWellFormed: ƒ toWellFormed()
        47. trim: ƒ trim()
        48. trimEnd: ƒ trimEnd()
        49. trimLeft: ƒ trimStart()
        50. trimRight: ƒ trimEnd()
        51. trimStart: ƒ trimStart()
        52. valueOf: ƒ valueOf()
        53. Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
*/
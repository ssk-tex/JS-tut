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

let userName = new String("sun");
// console.log(userName.padEnd(7,'.'));
// console.log(userName.padStart(7, "."));

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';

// console.log(`The word '${word}' ${
//     sentence.includes(word) ? "is" : "isn't"
// } in the sentence. `);

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
        3. at: ƒ at() [ takes an integer value and returns the item at that index, if negative count back from the last item ]
                [
                    ex. 
                        let userName = new String('sunny');
                        console.log(userName.at(1));        ==> o/p --> u
                        console.log(userName.at(-1));        ==> o/p --> y
                ]
        4. big:ƒ big() [ embeds the  string in '<big>' element ]
                [
                    ex.
                        let userName = new String('sunny');
                        console.log(userName.big());        ==> o/p --> <big>sunny</big>
                ]
        5. blink:ƒ blink() [ embeds the  string in '<blink>' element ]
                [
                    ex.
                        let userName = new String('sunny');
                        console.log(userName.blink());        ==> o/p --> <blink>sunny</blink>
                ]
        6. bold:ƒ bold()  [ embeds the  string in '<b> / bold' element ]
                [
                    ex.
                        let userName = new String('sunny');
                        console.log(userName.bold());        ==> o/p --> <b>sunny</b>
                ]
        7. charAt:ƒ charAt() [ takes an integer value and returns the item at that index ]
                [
                    ex. 
                        let userName = new String('sunny');
                        console.log(userName.at(1));        ==> o/p --> u
                ]
        8. charCodeAt:ƒ charCodeAt() [ returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index ]
                [
                    Ex.
                        let userName = new String('sunny');
                        console.log(userName.charCodeAt(1));    ==> o/p --> 117 (UTF-16 Code of 'u'=>117)
                ]
        9. codePointAt:ƒ codePointAt() [ returns a non-negative integer that is the Unicode code point value of the character starting at the given index, Note that the index is still based on UTF-16 code units, not Unicode code points ]
                [
                    ex.
                        let userName = new String('sunny');
                        console.log(userName.charCodeAt(1));    ==> o/p --> 117 (UTF-16 Code of 'u'=>117) 
                ]
        *10. concat:ƒ concat() [ concatenates the string arguments to this string and returns a new string ]
                [
                    ex. 
                        let userName = new String("Hello");
                        console.log(userName.concat(" World")); ==> o/p --> Hello World
                ]
        **11. constructor:ƒ String()
        12. endsWith:ƒ endsWith() [ determines whether a string ends with the characters of this string, returning true or false ]
                [
                    ex. 
                        let userName = new String("sunny");
                        console.log(userName.endsWith("y"));    ==> o/p --> true
                        console.log(userName.endsWith("u"));    ==> o/p --> false
                ]
        13. fixed:ƒ fixed() [ creates a string that embeds this string in a <tt> element (<tt>str</tt>), which causes this string to be displayed in a fixed-width font. ]
                [
                    ex.
                        let userName = new String("sunny");
                        console.log(userName.fixed());          ==> o/p --> <tt>sunny</tt>
                ]
        14. fontcolor:ƒ fontcolor() [ embeds this string in a <font> element (<font color="...">str</font>), which causes this string to be displayed in the specified font color. ]
                [
                    ex. 
                        let userName = new String("sunny");
                        console.log(userName.fontcolor("red")); ==> o/p --> <font color="red">sunny</font>
                ]
        15. fontsize: ƒ fontsize() [ embeds this string in a <font> element (<font size="...">str</font>), which causes this string to be displayed in the specified font size. ]
                [
                    ex.
                        let userName = new String("sunny");
                        console.log(userName.fontsize("2"));    ==> o/p --> <font size="2">sunny</font>
                ]
        **16. includes: ƒ includes() [ a case-sensitive search to determine whether a given string may be found within this string, returning true or false ]
                [
                    ex. 
                        const sentence = 'The quick brown fox jumps over the lazy dog.';
                        const word = 'fox';

                        console.log(`The word '${word}' ${
                            sentence.includes(word) ? "is" : "isn't"
                        } in the sentence. `);

                            'fox' ==> o/p --> The word 'fox' is in the sentence. 
                            'tiger' ==> o/p --> The word 'tiger' isn't in the sentence. 
                ]
        17. indexOf: ƒ indexOf() [ searches this string and returns the index of the first occurrence of the specified substring ]
                [
                    ex.
                        let userName = new String("sunny");
                        console.log(userName.indexOf("y"));     ==> o/p --> 4
                ]
        18. isWellFormed: ƒ isWellFormed() [ returns a boolean indicating whether this string contains any lone surrogates. ]
        19. italics: ƒ italics() [ embeds the  string in '<i> / italics' element ]
                [
                    ex.
                        let userName = new String("sunny");
                        console.log(userName.italics());    ==> o/p --> <i>sunny</i>
                ]
        20. lastIndexOf: ƒ lastIndexOf() [ returns the index of the last occurrence of the specified substring ]
                [
                    ex.
                        let userName = new String("sunny");
                        console.log(userName.lastIndexOf('y')); ==> o/p --> 4
                ]
        21. link: ƒ link() [ embeds the string with <a> ]
                [
                    ex.
                        let userName = new String("sunny");
                        console.log(userName.link("www.google.com"));
                        ==> o/p --> <a href="www.google.com">sunny</a>
                ]
        22. localeCompare: ƒ localeCompare()
        23. match: ƒ match() 
        24. matchAll: ƒ matchAll()
        25. normalize: ƒ normalize()
            [
               --- pads a string with another string (multiple times) until it reaches a given length. ---
            ]
        26. padEnd: ƒ padEnd() [ pads a string at the end ]
                [
                    ex. 
                    let userName = new String("sun");
    `               console.log(userName.padEnd(7,'.'));
                    ==> o/p --> sun....
                ]
        27. padStart: ƒ padStart() [ pads a string from the start ]
                [
                    ex.
                    let userName = new String("sun");
                    console.log(userName.padStart(7,'.'));
                    ==> o/p --> ....sun
                ]
        28. repeat: ƒ repeat() [ returns a new string which contains the specified number of copies of this string ]
                [
                    ex.
                    let str = 'hi';
                    console.log(str.repeat(4))  ==> o/p --> 'hihihihi'
                ]
        29. replace: ƒ replace() [ returns a new string with one, some, or all matches of a pattern replaced by a replacement ]
                [
                    ex.
                    let string = "I love India"
                    console.log(string) ==> o/p --> I love India.
                    console.log(string.replace("India", "World")) ==> o/p --> I love World.
                ]
        30. replaceAll: ƒ replaceAll() [ returns a new string with all matches of a pattern replaced by a replacement ]
                [
                    ex.
                    let string = 'I love India. India is a very big country';
                    console.log(string.replaceAll('India', 'US'));
                    ==> o/p --> I love US. US is a very big country
                ]
        31. search: ƒ search() [ executes a search for a match between a regular expression and this string, returning the index of the first match in the string ]
        32. slice: ƒ slice() [ extracts a section of this string and returns it as a new string, without modifying the original string ]
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

/*-------------------------- Numbers & Maths -------------------------------------*/

// num = new Number(65.9);
// console.log(num);
// console.log(num.valueOf());
// console.log(typeof num.valueOf());

/* 
    Number Method:-
        1. toExponential: ƒ toExponential() [ used to convert a number to its exponential form ]
                [
                    ex.
                    num = new Number(65);
                    console.log(num.toExponential());   ==> o/p --> 6.5e+1
                ]
        2. toFixed: ƒ toFixed() [ rounds the string to a specified number of decimals ]
                [
                    ex.
                    num = new Number(65);
                    console.log(num.toFixed(2));    ==> o/p --> 65.00
                ]
        3. toLocaleString: ƒ toLocaleString() [ converts a number into a string, using a local language format ]
                [
                    ex.
                    num = new Number(65);
                    console.log(num.toLocaleString()); ==>  o/p --> 65
                    console.log(typeof(num.toLocaleString('en-IN')));  ==> o/p --> string
                ]
        4. toPrecision: ƒ toPrecision() [ returns a string representing this number to the specified precision ]
                [
                    ex.
                    num = new Number(65.9);
                    console.log(num.toPrecision(2)); ==> o/p --> 66
                ]
        5. toString: ƒ toString() [ allows you to convert any number type value into its string type representation ]
                [
                    ex.
                    num = new Number(65); 
                    console.log(typeof(num.toString()));  ==> o/p --> string
                ]
        6. valueOf: ƒ valueOf() [ returns the value of this number ]
                [
                    ex.
                    num = new Number(65);
                    console.log(num.valueOf());     ==> o/p --> 65
                    console.log(typeof(num.valueOf())); ==> o/p --> number
                ]
*/

// console.log(Math.PI);

/* 
    Math Method: Study when used
*/

// const date = new Date();
// console.log(date.toString());
// console.log(typeof date);
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toISOString());

/* 
    Date & Time Method : Study When Used
*/

/* 
    JS Object
*/


/* Control Flow in Javascript */

/* 
    Falsy Value => [false, 0, -0, BigInt 0n, "", null, undefined, NaN];

    Truthy Value => [true, 1, "0", 'false', " ", [], {}, function(){}]
*/

/* Nullish Coalescing Operator (??) : null undefined */

// let val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? undefined ?? 10 ?? 15

// console.log(val1);
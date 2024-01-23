/* 
    for-of loop
*/
// const languages = ['c', 'c++', 'c#', 'java', 'js', 'php', 'r', 'python', 'ruby'];
// for (const language of languages) {
//     console.log(language);
// }

// const greetings = "Hello World";
// for (const greet of greeting) {
//     console.log(greet);
// }

/* 
    Maps
*/

// const map = new Map();
// map.set("IND", "India");
// map.set("USA", "United States Of America");
// map.set("NZ", "New Zealand");
// map.set("AUS", "Australia");
// map.set("UK", 'United Kingdom');
// map.set("SA", 'South Africa');

// // console.log(map);

// for (const [key, val] of map) {
//     console.log(`${key} : ${val} `);
// }

// const games = {
//     game1 : 'nfs', game2 : 'igi'
// }

// for (const [game, name] of games) {
//     console.log(`${game} : ${name}`);
// }  /* Not iterable */

const languageExtension = {
    js : 'JavScript', cpp: 'C++', rb: 'Ruby', swift: 'Swift  by aplpe'
}

for (const key in object) {
    console.log(key);
}
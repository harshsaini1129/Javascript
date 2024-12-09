// string declaration  and string is a object not array
const name = "harsh";
const repocount = 50;
//console.log(name+repocount+"value")  outdated way

//    console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

//string declaration other method
const gamename = new String("harshsainiHSCOM");
//    console.log(gamename);

console.log(gamename[0]);
// how to acess prototype
// console.log(gamename.__proto__);
// console.log(gamename.toUpperCase());
// to check character at which position
//  console.log(gamename.charAt(2));
//  console.log(gamename.indexOf('i'));

//substring

const substring = gamename.substring(0, 4);
// console.log(substring);

//slicing
const otherstring = gamename.slice(-8, 4);
// console.log(otherstring);

//trim work on white spaces
const newstringone = "  harsh  ";
// console.log(newstringone);
// console.log(newstringone.trim());

//replace
const url = "https:leetcode.com/u/harshsaini1129";
console.log(url.replace(":", "_"));

// to check any keyword present
console.log(url.includes("saini"));

// to convert string to array based on spaces or dash or anything
console.log(gamename.split(""));

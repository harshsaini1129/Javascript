// to add two arrays in one 
// push : add 1st array to 2nd array as a single element 
const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

// concat :

const allheros = marvel_heroes.concat(dc_heroes)
console.log(allheros);


// other way
const allheros2 = [...dc_heroes, ...marvel_heroes]
console.log(allheros2);

// to flat a nested array
const another_array = [1, 2, [3, 4, 5, 6], 7, [8, 9, [,1,3,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

// to create array
console.log(Array.isArray("harsh")); // CHECKS IF IT IS ARRAY OR NOT
console.log(Array.from("harsh"));
console.log(Array.from({name:"harsh"}));// interview / / whether top make array from key or value

let score1 = 100
let score2= 200
let score3 = 300
console.log(Array.of(score1,score2,score3));




//  constructors se :singleton banega

//objects literals


const JsUser = {
    // the key is treated as string
    name: "harsh",
    age: 18,
    "full name": "saini",
    email: "harshsaini@gmail.com",
    lastlogindays: ["monday", "saturday"],
    6 : 18
}
// to acess 
console.log(JsUser.email);
//or   
//key is treated as string
//   console.log(JsUser["email"]);
//   console.log(JsUser["6"]);
//   console.log(JsUser["full name"]);

// SYMBOL
// TO USE SYMBOL AS A KEY => SYMBOL IS NOT A STRING
// syntax for symbol


const mysym = Symbol("keys1");
// to acess it as( key) as symbol :::  [symbol] : "value",

const hsUser = {
  // the key is treated as string
  name: "harsh",
    age: 18,
  [mysym]: "keys1",
  "full name": "saini",
  email: "harshsaini@gmail.com",
  lastlogindays: ["monday", "saturday"],
  6: 18,
};
// symbol typeof objects
//   console.log(typeof[mysym]);
//   console.log(hsUser[mysym]);

//to overwrite vlaues 
JsUser.email = "malhotra@gpt.com"
// to restrict changes in object 
//    Object.freeze(hsUser)
//    JsUser.email = "malhotra@gpt.com";
// console.log(hsUser);
   

// to add function in object

JsUser.greeting = function () {
     console.log("helo abesec")    
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greeting2 = function () {
  console.log(`helo abesec,${this.name}`);
}
console.log(JsUser.greeting2());

   




   




















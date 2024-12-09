//primitive datatypes
//7 types:string,number,boolean,null,undefined,symbol,Bigint

// js is a dynimicaly typed

const score = 100;
//undefined
let usermail;

//bigint
const bignumber = 234567898765434567n;
//symbol
const id = Symbol("123");
const otherid = Symbol("123");
console.log(id === otherid);

//Reference (Non Primitive)
//arrays,objects,functions
// datatype of non primitive is( object )

//arrays
const heros = ["harsh", "devansh", "saini"];
//objects object={}
let myobj = {
  age: 22,
  name: "harsh",
};

//functions    function(){}

const myfunction = function () {
  console.log("hello world");
};

//****************************************************************************************************** */

// MEMORY
// STACK(PRIMITIVE)  HEAP(NON PRIMITIVE)

//example of primitive
let myyoutube = "harshsaini1129.com";

let anothername = myyoutube;

anothername = "chaiaurcode";

console.log(myyoutube);
console.log(anothername);

//example of non primitive

let userone = {
  email: "harshsaini1129.com",
  upi: "user@jk",
};

let usertwo = userone;

//how to acess elements in above

userone.email = "malhotra@1129";
console.log(userone.email);
console.log(usertwo.email);

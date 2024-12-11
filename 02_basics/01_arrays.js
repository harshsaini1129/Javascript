// arrays is a object 

  const myArr = [0, 1, 2, 3, 4, 5, 6, true, "harsh"]
  console.log(myArr[8]);
// array also declared as

  const myarr2 = new Array(1, 2, 3, 4, 5, 6)
  console.log(myarr2[2]);

// array methods
//1. push()
  myArr.push(7)
  console.log(myArr);
  
//2. pop() (without parameter)remove last element from array 
  myArr.pop()
  console.log(myArr);
//3. unshift()  adds element at start of array by shifting other elements by one  
  myArr.unshift(9)
  console.log(myArr);
//4. shift()  (without parameter)  removes the added element at start of array
  myArr.shift()
  console.log(myArr);
// to check if element in array
  console.log(myArr.includes(9));
// to ask index of element
  console.log(myArr.indexOf(9));
  
// .join() converts array into string

const newarr = myArr.join()
console.log(newarr);

//slice : it dont manuplate the original array; and it dont include range
//splics: it manuplates the original array and it includes range
  
  const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("b", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
//it premanantly delete the element from original array
 console.log(myArr);
 
 
  

  
  


  

 
 

  



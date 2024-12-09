let mydate = new Date()
// console.log(mydate);
// we convert date into string to get monts or year or day
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());


// Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
// let mycreatedate = new Date(2023, 0, 23)
 // yy-mm-dd
let mycreatedate = new Date(2023, 0, 23, 5, 3);

// console.log(mycreatedate.toDateString());
// console.log(mycreatedate.toLocaleString());

// time stamp   used in quizes

let myTimeStamp = Date.now()
// gives value in miliseconds
// comparison always done in milli seconds
console.log(myTimeStamp);
console.log(mycreatedate.getTime());
// in seconds
console.log(Math.floor(Date.now() / 1000));

let newdate = new Date()
console.log(newdate.getMonth() + 1);
console.log(newdate.getDay());

console.log(`today is ${newdate.getDay()} and month is ${newdate.getMonth()}`);
// to define more than one parameters
newdate.toLocaleString('default',{

    weekday: "long",
    month:"narrow",
    
})
console.log(newdate.toLocaleString());

    

























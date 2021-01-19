/*
Author: Andy Nguyen
Date: January 19, 2021
Title: JavaScript Programming Demo Exercise 3
Description: Dates Demo
*/

let registration = new Date(2021, 0, 7, 8, 25);
console.log(registration.toString());
console.log(`Year: ${registration.getFullYear()}`);
console.log(`Month: ${registration.getFullYear()}`);
console.log(`Dayt of week: ${registration.getDay()}`);
console.log(`Date: ${registration.getDate()}`);
console.log(`Hours: ${registration.getHours()}`);
console.log(`Minutes: ${registration.getMinutes()}`);
console.log(`Seconds: ${registration.getSeconds()}`);

let now = new Date();
console.log(now.toString());
console.log(`Now Hours: ${now.getHours()}`);
console.log(`Now Minutes: ${now.getMinutes()}`);
console.log(`Now Seconds: ${now.getSeconds()}`);
console.log(`Now Milliseconds: ${now.getMilliseconds()}`);

now.setFullYear(1999);
console.log(now.toDateString());
console.log(now.toTimeString());

console.log('~~~~~~~~~~~~~~~~~~~');
console.log('My Age a Billion Seconds After my Birth Date')
console.log('~~~~~~~~~~~~~~~~~~~');
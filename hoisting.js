// Hoisting -------------> Upore tola.
// Jokhon amra kono variable declare kori tokhon javascript setake kibabe diel kore setai hocce hoaistig
// JavaScript একটি হোস্টেড (hoisted) ভাষা, যা মানে হচ্ছে, এটি কোড রান হওয়ার আগেই ভ্যারিয়েবল এবং ফাংশনগুলির ডেক্লারেশন হয়ে যায়। এটির ফলে, কোডের এক অংশে ভ্যারিয়েবল বা ফাংশন ব্যবহার করা হতে পারে, আর সেই একই ভ্যারিয়েবল বা ফাংশন কোডের অন্য অংশে ডেক্লেয়ার করা হয়েছে।

// let a;
// console.log(a);
// a = "Bangladesh";
// console.log(a);

// let a;
// console.log(a);

// let LANGUAGE = "Java";
// let language = "Javascript";

// function getLanguage() {
//   if (!language) {
//     let language = LANGUAGE;
//   }
//   return language;
// }

// console.log(`I Love ${getLanguage()}`);

// function myFunc() {
//   console.log(`I love Javascript`);
// }

// myFunc();

// const myFunc = function () {
//   var language = "JavaScript";
//   console.log(language);
// };

// myFunc();

// x = 49;
// console.log(x);
// var x;

var a = 100;
newPrint;

print(10);

var newPrint = print;
newPrint;

function print(a) {
  console.log(a);
}

print(a);

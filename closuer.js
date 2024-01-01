// clousure

// ক্লাউজার হল যখন একটি ফাংশন মনে রাখতে এবং এটির আভিধানিক সুযোগ অ্যাক্সেস করতে সক্ষম হয় এমনকি যখন সেই ফাংশনটি তার আভিধানিক স্কোপের বাইরে সঞ্চালিত হয়

// clousuer is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scop

// able to remember and access it's lexical scope

// when that function executing outside it's lexical scope

// function test() {
//   var msg = "I am learning lexical scope and Clousure";

//   function sayMsg() {
//     console.log(msg);
//   }
//   sayMsg();
// }

// test();

function test() {
  var msg = "I am learning lexical scope and Clousure";

  return function () {
    console.log(msg);
  };
}

var sayMsg = test();
console.log(sayMsg);

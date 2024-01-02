// let num1 = 4;
// let num2 = 5;

// var sum = function (num1, num2) {
//   return num1 + num2;
// };

// console.dir(sum);

// """"""""""""""""""""let & const hocce block scop""""""""""""""""""""

// """""""""""""""""""""""var hocce functional scop"""""""""""""""""""""""

// console.log(sum());

// clousure exactily value take dore rakhe na se reference ta ke dore rakhe

// (function () {
//   var num1 = 5;
//   var num2 = 7;

//   var sum = function () {
//     return num1 + num2;
//   };
//   console.log(sum());
//   console.dir(sum);

//   num1 = 6;
//   num2 = 9;

//   console.log(sum());
//   console.dir(sum);
// })();

// // let myFunc = sum();

// console.dir(sum);

// function bankAccount(initialBalance) {
//   let balance = initialBalance;
//   return function () {
//     return balance;
//   };
// }

// let account = bankAccount(100000);
// console.log(account());

// enclouseing scope

// (function () {
//   var num1 = 4;

//   var sum = function () {
//     var num2 = 3;
//     return num1 + num2;
//   };
//   console.dir(sum);
// })();

// practical example

function stopWatch() {
  var startTime = Date.now();

  function getDelay() {
    console.log(Date.now() - startTime);
  }

  return getDelay;
}

const timer = stopWatch();

for (var i = 0; i < 100000000; i++) {
  var a = Math.random() * 10000000;
}

timer();
console.dir(timer);

timer = null;

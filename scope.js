// let x = 5;

// function myFunction() {
//   // myFunction childer dunia
//   x = 45;
//   console.log(`${x} from myFunction()`);
// }

// myFunction();

// console.log(x);

// global scop

const i_am_global = 42;

// local scoop

function local() {
  const i_am_local = 11;
  console.log(i_am_local);
}

// block scop

{
  const i_am_blocked = 99;

  function a() {
    console.log(i_am_blocked);
  }

  function b() {
    console.log(i_am_blocked);
  }
}

// lexical scop

// lexical scop hocce bahirer zekono variable ke define kora jabe
// lexical scop top theke inner e jete thakbe kinto inner theke bahire access kora jabe na

function outer() {
  function inner() {
    console.log(i_am_global);
  }
  inner();
}

// scop chaining

const i_am_globals = 43;

function mostOuter() {
  function outer() {
    function inner() {
      function mostOuter() {
        function main() {
          console.log(i_am_globals);
        }
      }
    }
  }
}

// var is a functional scop

// var ke function er bahire theke access kora jay

if (true) {
  var varVariable = "This is var";
}

console.log(varVariable);

// let is a block scop
// let is't access out side of the function beacuse it was a block scop
if (true) {
  let letVariable = "THis is let";
  console.log(letVariable);
}
// console.log(letVariable); //no access outside of function

// const
// const is not reassign or redeclare
if (true) {
  const constVariable = {
    name: "Javascript",
    age: "25 years",
  };
  //   constVariable = "This is let again";
  constVariable.console.log(constVariable);
}

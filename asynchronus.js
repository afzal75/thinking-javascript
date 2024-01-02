// function async() {
//   var a = 40;

//   setTimeout(() => {
//     console.log(a);
//   }, 3000);
// }

// async();

// another example

// function apiFuction(url) {
//   fetch(url).then((res) => {
//     console.log(res);
//   });
// }

// apiFuction("https://jsonplaceholder.typicode.com/todos/1");

const processorder = (customer) => {
  console.log(`processing order for customer 1`);

  var currentTime = new Date().getTime();
  //   while (currentTime + 3000 >= new Date().getTime());

  setTimeout(() => {}, 3000);

  console.log(`order processing for customer 1`);
};

console.log(`take order for customer 1`);
processorder();
console.log(`completed order for customer 1`);

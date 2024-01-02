// function async() {
//   var a = 40;

//   setTimeout(() => {
//     console.log(a);
//   }, 3000);
// }

// async();

// another example

function apiFuction(url) {
  fetch(url).then((res) => {
    console.log(res);
  });
}

apiFuction("https://jsonplaceholder.typicode.com/todos/1");

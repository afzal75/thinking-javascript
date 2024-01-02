// for (let i = 0; i < 3; i++) {
//   const f = () => {
//     console.log(i);
//   };
//   f();
// }

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000);
}

console.log("after the for loop");

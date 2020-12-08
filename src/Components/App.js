import React from "react";
import Header from "./header/Header";
import Products from "./products/Products";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Products />
    </>
  );
};

export default App;

// (function () {
//   console.log("hello");
// })(); //IIFE

// const arr = [{ a: "123" }, { b: "456" }];

// const newArr = [...arr];

// console.log(arr);
// console.log(newArr);
// newArr.push({c:"233223"});
// console.log(arr);
// console.log(newArr);

// const JSObject = {
//   functions: {
//     newFunc() {
//       console.log("hello");
//     },
//   },
// };

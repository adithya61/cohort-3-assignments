// const fs = require("fs").promises;

// const f =
//   "/Users/zonic/Downloads/cohort 3.0/week 2/Assignments/assignments/week-2/week-2-async-js/easy/write.txt";

// async function writeToFile(file, contents) {
//   try {
//     await fs.writeFile(file, contents, "utf8");
//     console.log("file written successfully");
//   } catch (error) {
//     console.log("cannot write to file", error);
//   }
// }

// writeToFile(f, "hi how are you");

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise resolved");
    resolve();
  }, 1000);
});

let printDone = () => console.log("promise completed");

p.then(printDone);

console.log("continues");

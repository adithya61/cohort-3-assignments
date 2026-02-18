/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function promisifiedSetTimeout(n) {
  return new Promise((res, rej) =>
    setTimeout(() => {
      res();
    }, n),
  );
}

function wait(n) {
  promisifiedSetTimeout(n).then(() => console.log("promise resolved"));
}

wait();

module.exports = wait;

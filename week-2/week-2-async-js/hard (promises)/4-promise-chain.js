/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((res, rej) =>
    setTimeout(() => {
      res();
    }, t),
  );
}

function wait2(t) {
  return new Promise((res, rej) =>
    setTimeout(() => {
      res();
    }, t),
  );
}

function wait3(t) {
  console.log("three called");
  return new Promise((res, rej) =>
    setTimeout(() => {
      res(t);
    }, t),
  );
}

async function calculateTime(t1, t2, t3) {
  const startTime = new Date().getTime();
  let result = await wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3));
  console.log(result);
  const endTime = new Date().getTime();

  return endTime - startTime;
}

calculateTime(1000, 2000, 3000).then((res) => console.log(res));

// ? promise.all took only 3 seconds while sequential call took 6 seconds.

module.exports = calculateTime;

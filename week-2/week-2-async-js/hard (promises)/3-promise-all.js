/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((res) =>
    setTimeout(() => {
      res(t);
    }, t),
  );
}

function wait2(t) {
  return new Promise((res) =>
    setTimeout(() => {
      res(t);
    }, t),
  );
}

function wait3(t) {
  return new Promise((res) =>
    setTimeout(() => {
      res(t);
    }, t),
  );
}

async function calculateTime(t1, t2, t3) {
  let start = Date.now();
  await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);

  let end = Date.now() - start;

  return end;
}

calculateTime(1000, 2000, 3000).then(res => console.log(res))

module.exports = calculateTime;

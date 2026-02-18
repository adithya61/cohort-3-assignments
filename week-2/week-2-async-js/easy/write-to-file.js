// prettier-ignore
const fs = require('fs');

async function writeOp() {
  await fs.writeFile(
    "/Users/zonic/Downloads/cohort 3.0/week 2/Assignments/assignments/week-2/week-2-async-js/easy/text.txt",
    "hi",
    "utf8",
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
    },
  );
}

async function readOp() {
  fs.readFile(
    "/Users/zonic/Downloads/cohort 3.0/week 2/Assignments/assignments/week-2/week-2-async-js/easy/text.txt",
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(data);
    },
  );
}

writeOp().then(readOp());

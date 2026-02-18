const fs = require("fs");

const contents = fs.readFile(
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

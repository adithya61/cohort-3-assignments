// prettier-ignore
const fs = require('fs')

const file =
  "/Users/zonic/Downloads/cohort 3.0/week 2/Assignments/assignments/week-2/week-2-async-js/medium/text.txt";

var content = "";

fs.readFile(file, "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  let cleanedStr = "";

  for (let i = 0; i < data.length; ++i) {
      cleanedStr += data[i];
      
      while (data[i] == " " && data[i + 1] == " ") i++;
  }

  fs.writeFile(file, cleanedStr, "utf8", (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
});

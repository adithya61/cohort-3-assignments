// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let second = date.getSeconds();

setInterval(() => {
  console.log(hour, min, second);
  second++;
  if(second == 60){
    second = 0;
    min = min + 1;
    if(min == 60){
        min = 0;
        hour = hour + 1;
        if(hour == 25){
            hour = 0;
        }
    }
  }
}, 1000);



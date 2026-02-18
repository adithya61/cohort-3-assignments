// var count = 0;
// setInterval(() => {

//     console.log(count);
//     count++;
// }, 1000);

// counter without setInterval.

// let counter = 0;

// function updateCounter(){
//     counter++;
//     console.log(counter);;

//     setTimeout(() => {
//         updateCounter()
//     }, 1000);
// }

// updateCounter();

let count = 0

// setInterval(() => {
//     count++;
//     console.log(count);
// }, 1000);

function updateCount () {
    count++;

    setTimeout(() => {
        console.log(count);
        updateCount();
    }, 1000);
}

updateCount();
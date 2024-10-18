// let counter = 0;
// const elementCounter = document.getElementById("counter");
// const button = document.querySelector("button");

// function incrementarCounter() {
//   counter++;
//   elementCounter.textContent = counter;
// }

// button.onclick = incrementarCounter;

// ussando addEventListener
let counter = 0;
const elementCounter = document.getElementById("counter");
const button = document.querySelector("button");

function incrementarCounter(event) {
  counter++;
  elementCounter.textContent = counter;
  console.log(event);
}

button.addEventListener("click", incrementarCounter);

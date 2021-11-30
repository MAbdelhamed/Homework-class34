'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollTheDices()` by using `.map()` on the `dices` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  const promisesList = dices.map((dice) => {
    return rollDice(dice);
  });
  return Promise.race(promisesList);
}

async function main() {
  try {
    const resolved = await rollTheDices();
    console.log('resolved ====>', resolved);
  } catch (error) {
    console.log('Rejected ====>', error.message);
  }
}

main();

// ! Do not change or remove the code below
module.exports = rollTheDices;

/*
you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why?



   because of promise.race it return a promise that resolved or rejected as soon as one of the promises in an iterable resolved or rejected
*/
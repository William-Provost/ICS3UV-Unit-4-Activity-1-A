/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-24
 * @fileoverview This program prints out the times table.
 */

// variables
let numberAsString: string = "";
let numberAsNumber: number = 0;

// input number
numberAsString = prompt("Enter a number (1-12): ") || "0";
numberAsNumber = parseInt(numberAsString);

// print times table
console.log(`\nTimes Table for ${numberAsNumber}:`);
for (let counter: number = 1; counter <= 12; counter++) {
  console.log(`${numberAsNumber} x ${counter} = ${numberAsNumber * counter}`);
}

console.log("\nDone.");

/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-24
 * @fileoverview This program prints out the times table.
 */

// variables
let numberAsString1: string = "";
let numberAsNumber1: number = 0;

// input number
numberAsString1 = prompt("Enter a number (1-12): ") || "0";
numberAsNumber1 = parseInt(numberAsString1);

// print times table
console.log(`\nTimes Table for ${numberAsNumber1}:`);
for (let counter: number = 1; counter <= 12; counter++) {
  console.log(`${numberAsNumber1} x ${counter} = ${numberAsNumber1 * counter}`);
}

console.log("\nDone.");

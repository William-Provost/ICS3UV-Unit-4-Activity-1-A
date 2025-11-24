// Author: William Provost
// Version: 1.0.0
// Date: 2025-11-24
// Fileoverview: This program prints out the times table.

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	// variable declaration
	var numberAsString string
	var numberAsNumber int

	var reader = bufio.NewReader(os.Stdin)

	// input number
	fmt.Print("Enter a number (1-12): ")
	numberAsString, _ = reader.ReadString('\n')
	numberAsString = strings.TrimSpace(numberAsString)
	numberAsNumber, _ = strconv.Atoi(numberAsString)

	// print times table
	fmt.Println("\nTimes Table for", numberAsNumber)
	for counter := 1; counter <= 12; counter++ {
		fmt.Printf("%d x %d = %d\n", numberAsNumber, counter, numberAsNumber*counter)
	}

	fmt.Println("\nDone.")
}

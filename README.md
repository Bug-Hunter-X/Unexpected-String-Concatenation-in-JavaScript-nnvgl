# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript error: unexpected string concatenation due to loose typing.  The `foo` function is intended to add two numbers, but it performs string concatenation when one of the inputs is a string.

## Bug

The `bug.js` file contains the faulty code.  Observe the unexpected output when calling `foo(1, '2')`.

## Solution

The `bugSolution.js` file provides a solution to explicitly check the data types before performing the addition, ensuring correct numerical addition.
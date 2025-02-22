function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error('Both inputs must be numbers.');
    return NaN; // Or handle the error in a more appropriate way
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Both inputs must be numbers. NaN
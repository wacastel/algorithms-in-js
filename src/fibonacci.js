function fibonacci(max) {
    const FIBONACCI_ZERO = 0;
    const FIBONACCI_ONE = 1;
    let result;
    let i;
    let nMinusOne = FIBONACCI_ZERO;
    let nMinusTwo = FIBONACCI_ONE;
    for (i = 0; i < max; i++) {
      result = nMinusOne + nMinusTwo;
      nMinusTwo = nMinusOne;
      nMinusOne = result;
      printOutput(result, max);
    }
  }
  
  function printOutput(data, input) {
    document.getElementById("fibonacci").innerHTML += `${data} `;
  }
  
  const input = 20;
  document.getElementById('fibonacci').innerHTML += `Fibonacci [n=${input}]: `;
  fibonacci(input);

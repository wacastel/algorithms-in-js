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
      printOutput(result);
    }
  }
  
  function printOutput(data) {
    document.getElementById("fibonacci").innerHTML += `${data} `;
  }
  
  fibonacci(20);

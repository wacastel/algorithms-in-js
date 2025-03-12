function factors(n) {
    let i;
    const sqrt_n = Math.sqrt(n);
    const result = [];
    for (i = 0; i <= n; i++) {
      if (n % i === 0) {
        //console.log('*** ', i, ' is a factor! ***');
        result.push(i);
      }
    }
    printOutput(result, n);
  }
  
  function printOutput(data, input) {
    document.getElementById('factors').innerHTML += `Factors of ${input}: `;
    document.getElementById('factors').innerHTML += `${data} `;
  }
  
  factors(40);
  
function factors(n) {
    let result = [];
    let i;
    let sqrt_n = Math.sqrt(n);
    for (i = 0; i < sqrt_n; i++) {
        result += i;
        printOutput(result);
    }
  }
  
  function printOutput(data) {
    document.getElementById("factors").innerHTML += `${data} `;
  }
  
  factors(40);
  
function getMaxAdditionalDinersCount(N, K, M, S) {
    // Write your code here
    const tableArray = new Array(N).fill(1);
    console.log(tableArray);
    S.forEach(seat => {
      console.log(seat);
      tableArray[seat-1] = 0;
      for (let i = 1; i <= K; i++) {
        tableArray[seat-1-i] = 0;
        tableArray[seat-1+i] = 0;
      }
    });
    console.log(tableArray);
    for (let i = 0; i < tableArray.length - 1; i++) {
      if (tableArray[i] === 1 && tableArray[i+1] === 1) {
        tableArray[i+1] = 0;
        let emptySeat = tableArray[i+2];
        let seatIndex = 2;
        while (K > 1 && emptySeat === 1) {
          emptySeat = tableArray[i+seatIndex];
          if (emptySeat === 1) {
            tableArray[i+seatIndex] = 0;
          }
          seatIndex++;
        }
      }
    }
    console.log(tableArray);
    let sum = 0;
    tableArray.forEach(seat => {
      sum += seat;
    })
    console.log(sum);
    return sum;
  }
  
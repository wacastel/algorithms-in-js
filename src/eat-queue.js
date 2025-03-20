function getMaximumEatenDishCount(N, D, K) {
    // Write your code here
    const eatQueue = [];
    let resultSum = 0;
    for (let i = 0; i < K; i++) {
      if (!eatQueue.includes(D[i])) {
        resultSum++;
      }
      eatQueue.push(D[i]);
    }
    console.log(eatQueue);
    for (let i = K; i < D.length; i++) {
      if (!eatQueue.includes(D[i])) {
        resultSum++;
        console.log(D[i],' is not included in ', eatQueue);
      }
      eatQueue.shift();
      eatQueue.push(D[i]);
      console.log(eatQueue);
    }
    //console.log(eatQueue);
    return resultSum;
  }

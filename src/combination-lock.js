function getDistance(N, C) {
    let result = 0;
    // since the lock is always positioned at 1 to start, add 1 to the beginning of the combination array if not present
    if (C[0] !== 1) {
        C.unshift(1);
    }
    for (let i = 0; i < C.length - 1; i++) {
        const forwardDistance = Math.abs(C[i+1] - C[i]);
        const distToN = Math.min(C[i], Math.abs(C[i] - N));
        const distFromN = Math.min(C[i + 1], Math.abs(N - C[i + 1]));
        const reverseDistance = distToN + distFromN;
        const distance = Math.min(forwardDistance, reverseDistance);
        result += distance;
    }
    console.log('result: ', result);
    return result;
}

//const N = 3;
//const C = [1, 2, 3]; // ans = 2

const N = 10;
const C = [9, 4, 4, 8];

const combiLength = C.length;
console.log('N: ', N);
console.log('input combination: ', C);
getDistance(N, C);

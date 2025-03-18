function letterToggle(N, M) {
    const result = [];
    for (let i = 0; i < M.length; i++) {
        if (M[i] === 'A') {
            result.push('B');
        } else {
            result.push('A');
        }
    }
    const toggled = result.join('');
    console.log('Letter Toggle input: ', M);
    console.log('N: ', N);
    console.log('result: ', toggled);
    document.getElementById("letter-toggle").innerHTML += `letter toggle result: ${toggled} `;
    return result;
}
const M = 'ABAABBA';
letterToggle(M.length, M);

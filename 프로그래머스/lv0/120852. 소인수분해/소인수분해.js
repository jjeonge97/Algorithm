function solution(n) {
    var answer = []; 
    let prime = 2

    while (n !== 1) {
        if(n % prime === 0) {
            answer.push(prime) 
            n = n / prime 
            prime = 2
        } else {
            prime ++
        }
    }
    
    const set = new Set(answer);
    return [...set];
}
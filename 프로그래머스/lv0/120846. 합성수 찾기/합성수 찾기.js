function solution(n) {
//     var answer = 0;
//     for(let i = 4; i <= n; i ++) {
//         let count = 0
//         for(let j = 1; j <= i; j++) {
//             if(i % j === 0) {
//                 count++
//             }
//         }
        
//         if(count >= 3) {
//             answer ++
//             count = 0
//         }
//     }
//     return answer;
    let answer = 0;
    function isPrime(num) {
        if(num <= 2) return true;
        
        for(let i = 2; i < num; i++) {
            if(num % i === 0) return false;
        }
        
        return true;
    }
    
    for(let i = 1; i <= n; i++) {
        if(isPrime(i)) answer++;
    }
    
    return n - answer
}
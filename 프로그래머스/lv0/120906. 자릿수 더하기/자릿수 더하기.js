function solution(n) {
   let str = String(n)
   let sum = 0;
    for(let i = 0; i < str.length; i++) {
        sum += Number(str[i])
    }
    
    return sum
}
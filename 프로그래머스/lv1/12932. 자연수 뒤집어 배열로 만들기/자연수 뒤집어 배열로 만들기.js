function solution(n) {
    var answer = [];
    let num = String(n)
    for(let i = 0; i < num.length; i++) {
        answer.push(Number(num[i]))
    }
    return answer.reverse();
}
function solution(numbers) {
    var answer = [];
 
    for(let i in numbers) {
        answer.push(numbers[i] * 2)
    }
    return answer;
}
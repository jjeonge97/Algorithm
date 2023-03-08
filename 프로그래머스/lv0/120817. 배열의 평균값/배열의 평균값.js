function solution(numbers) {
    var answer = 0;
    return numbers.reduce((acc, cur) => acc+cur) / numbers.length
    // return answer;
}
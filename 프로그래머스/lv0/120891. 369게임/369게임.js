function solution(order) {
    var answer = String(order).split('').filter(el => el === "3" || el === "6" || el === "9").length
    return answer;
}
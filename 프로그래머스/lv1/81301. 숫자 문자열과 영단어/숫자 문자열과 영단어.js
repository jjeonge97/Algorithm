function solution(s) {
    let str = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine']
    let answer = s;
    for(let i = 0; i < str.length; i++) {
        let arr = answer.split(str[i])
        answer = arr.join(i)
    }
    return Number(answer);
}
function solution(my_string) {
    
    let str = my_string.split(' ')
    let sum = Number(str[0])

    for(let i = 1; i < str.length - 1; i++) {
        if(str[i] === '+') {
            sum += Number(str[i + 1])
        } else if(str[i] === '-') {
            sum -= Number(str[i + 1])
        } else continue;
    }
    return sum
}
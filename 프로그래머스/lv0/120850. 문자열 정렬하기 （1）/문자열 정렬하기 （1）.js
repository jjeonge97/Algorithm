function solution(my_string) {

    return my_string.split('').filter(el => !isNaN(el)).map(el => +el).sort()
}
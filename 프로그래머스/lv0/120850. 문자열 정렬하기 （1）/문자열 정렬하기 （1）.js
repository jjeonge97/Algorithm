function solution(my_string) {
    
    //return my_string.split('').map(el => el === 0 ? 0 : parseInt(el))
    return my_string.split('').filter(el => !isNaN(el)).map(el => +el).sort()
}
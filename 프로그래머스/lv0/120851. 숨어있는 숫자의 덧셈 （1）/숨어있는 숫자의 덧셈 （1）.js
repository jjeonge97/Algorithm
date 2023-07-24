function solution(my_string) {
    
    let answer = 0;
   return my_string.split('').filter(el => !isNaN(el)).reduce((acc, cur) => +acc + +cur, 0)
}
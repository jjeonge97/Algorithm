function solution(array, n) {
    let answer = 0;
    let newArr = array.sort((a,b) => a -b).map((el) => Math.abs(n - el))

    let min = Math.min(...newArr);
    answer = newArr.indexOf(min);

    return array[answer];
  
}
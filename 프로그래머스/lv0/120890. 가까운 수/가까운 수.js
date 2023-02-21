function solution(array, n) {
    let first = 0;
    let last = 0;
    let newArr = array.map((el) => Math.abs(n - el));
    let min = Math.min(...newArr);
    first = newArr.indexOf(min);
    last = newArr.lastIndexOf(min);

  if (array[first] < array[last]) {
    return array[first];
  } else {
    return array[last];
  }
}
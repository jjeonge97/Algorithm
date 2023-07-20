function solution(numbers, direction) {
    if(direction === 'right') {
        let last = numbers.pop();
        numbers.unshift(last);
        return numbers;
    } else {
        let first = numbers.shift();
        numbers.push(first);
        return numbers;
    }
}
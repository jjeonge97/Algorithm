function solution(s) {
    let sum = 0;
    const arr = s.split(' ');
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'Z') {
            sum -= arr[i - 1]
        } else {
            sum += Number(arr[i])
        }
    }
    
    return sum;
}
function solution(s) { 
    let count = 0;
    let zeroCnt = 0;
    
    while(s !== '1') {
        let str = s.split('').filter(el => el === '1').length
        count += 1
        zeroCnt += s.length - str
        s = str.toString(2)
    }
    
    return [count, zeroCnt]
}
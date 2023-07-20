function solution(dot) {
//     let a = {
//         1 : 0,
//         2 : 0,
//         3 : 0,
//         4 : 0
//     }
    
//     if(dot[0] > 0) a['1'] += 1, a['4'] += 1
//     else a['2'] += 1, a['3'] += 1
    
//     if(dot[1] > 0) a['1'] += 1, a['2'] += 1
//     else a['3'] += 1, a['4'] += 1
    
//     for(let el in a) {
//         if(a[el] === 2) return Number(el)
//     }
    
    const [num1, num2] = dot;
    const check = num1 * num2 > 0;
    
    return num1 > 0 ? (check ? 1 : 4) : (check ? 3: 2)
}
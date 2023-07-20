function solution(num_list, n) {
//     const result = [];
//     let idx = 0;
    
//     while(idx < num_list.length) {
//         let arr = [];
//         for(let i = 0; i < n; i++) {
//             arr.push(num_list[idx])
//             idx++
//         }
//         result.push(arr)
//     }
//     return result
    
    const result = [];
    
    while(num_list.length) {
        result.push(num_list.splice(0,n))
    }
    
    return result
}
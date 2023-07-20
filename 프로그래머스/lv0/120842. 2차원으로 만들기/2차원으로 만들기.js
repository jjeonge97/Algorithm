function solution(num_list, n) {
    const result = [];
    let idx = 0;
    
    while(idx < num_list.length) {
        let arr = [];
        for(let i = 0; i < n; i++) {
            arr.push(num_list[idx])
            idx++
        }
        result.push(arr)
    }
    return result
}
function solution(arr) {
    let min = Math.min(...arr)
    let minidx = arr.indexOf(min)
    arr.splice(minidx,1)
    
    if(arr.length === 0) return [-1]
    
    return arr

}
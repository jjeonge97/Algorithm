function solution(n) {
    let num = 1;
    let mul = 1;
    
    while(mul <= n) {
        num++
        mul = mul * num
    }
    
    return num -1
}
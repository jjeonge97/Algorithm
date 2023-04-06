function solution(num, k) {
    // let str = String(num).split('')
    // return str.includes(String(k)) ? str.indexOf(String(k)) + 1 : -1
    let str = String(num)
    return str.includes(String(k)) ? str.indexOf(String(k)) + 1 : -1
}
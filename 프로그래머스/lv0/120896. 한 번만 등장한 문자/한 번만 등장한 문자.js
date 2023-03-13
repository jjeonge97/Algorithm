function solution(s) {
let str = [...s]
    let obj = {}
    let arr = []
    str.map(el => obj[el] ? ++obj[el] : obj[el] = 1)
    for(let key in obj) {
        if(obj[key] === 1) arr.push(key)
    }
    return arr.sort().join('')
}
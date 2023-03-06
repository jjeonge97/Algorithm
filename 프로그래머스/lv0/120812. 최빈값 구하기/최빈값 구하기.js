function solution(array) {

    if(array.length === 1) return array[0]
    
    let obj = {} 
    array.map(el => obj[el] = ++obj[el] || 1 )
    //{1:1, 2:1, 3:3, 4:1}
    let arr = []
    for(let key in obj) {
        arr.push(obj[key])
    }
    
    let max = Math.max(...arr)
    
    let objArr = Object.keys(obj).filter(el => obj[el] === max)
    // [1,2,3,4]
   //  objArr = [3]
    //arr = [2,2]
    //return arr.indexOf(max) === arr.lastIndexOf(max) ? -1 : max
    
    return objArr.length === 1 ? +objArr[0] : -1
}
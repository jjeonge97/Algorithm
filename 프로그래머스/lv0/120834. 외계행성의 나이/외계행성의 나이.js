function solution(age) {
    const arr = ['a','b','c','d','e','f','g','h','i','j']
    const str = 'abcdefghij'
    const answer = []
    
    String(age).split('').map(el => answer.push(str[el]))
    
    return answer.join('')
}
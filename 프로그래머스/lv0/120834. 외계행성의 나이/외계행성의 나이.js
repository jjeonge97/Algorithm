function solution(age) {
    const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const answer = []
    
    String(age).split('').map(el => answer.push(arr[el]))
    
    return answer.join('')
}
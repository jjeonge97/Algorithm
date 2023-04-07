function solution(quiz) {
    let arr = []
    
    for(let i = 0; i < quiz.length; i++) {
        let a = quiz[i].split(' ')
        let first = Number(a[0])
        let result = Number(a[a.length - 1])
        for(let j = 1; j < a.length - 2; j++) {
            if(a[j] === '+') {
                first += Number(a[j + 1])
                if(first === result) arr.push("O")
                else arr.push('X')
            } else if(a[j] === '-') {
                first -= Number(a[j + 1])
                if(first === result) arr.push("O")
                else arr.push('X')
            } else continue
        }
    }
    return arr
}


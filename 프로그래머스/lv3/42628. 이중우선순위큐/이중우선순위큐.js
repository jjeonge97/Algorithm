function solution(operations) {
    let result = [];
    
    for(let i = 0; i < operations.length; i++) {
        if(operations[i].charAt(0) === "I") {
            result.push(Number(operations[i].slice(2)));
        } else if(operations[i] === "D 1") {
            const max = Math.max(...result)
            const index = result.indexOf(max)
            result.splice(index,1)
        } else if(operations[i] === "D -1") {
            const min = Math.min(...result)
            let index = result.indexOf(min)
            result.splice(index,1)
        }
    }

    return result.length === 0 ? [0,0] : [Math.max(...result), Math.min(...result)]
}
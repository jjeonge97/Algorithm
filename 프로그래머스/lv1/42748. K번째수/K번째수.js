function solution(array, commands) {
    let answer = [];
    // return arr.slice(commands[0] - 1,commands[1]).sort((a,b) => a - b)[commands[2] - 1]
    return commands.map(el => array.slice(el[0] -1, el[1]).sort((a,b) => a - b)[el[2] - 1])
}
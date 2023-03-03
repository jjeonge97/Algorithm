function solution(array, commands) {
    // var answer = [];
    // return answer;
    
   return commands.map(el => array.slice(el[0] - 1, el[1]).sort((a,b)=> a -b)[el[2] - 1])
}
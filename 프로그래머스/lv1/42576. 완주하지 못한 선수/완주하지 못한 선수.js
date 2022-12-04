function solution(participant, completion) {
    var answer = '';
    let par = {};
    let com = {};
    for (let el of participant) {
        par[el] = (par[el] || 0) + 1;
    }
    for (let el of completion) {
        com[el] = (com[el] || 0) + 1;
    }
    for(let key in par) {
        if(par[key] === com[key] && par[key] !== 0) {
            par[key] -=1
        } else {
            answer += key
        }
    }
    return answer;
}
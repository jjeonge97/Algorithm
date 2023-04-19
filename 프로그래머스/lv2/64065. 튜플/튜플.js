function solution(s) {
    var answer = [];
    s = s.replace("{{", "").replace("}}", "").split("},{").sort((a,b) => a.length - b.length)
    
    let arr = [] // [['2'],['2','1'],['1','2','3'],['1','2','3','4']]
    for(let i = 0; i < s.length; i++) {
        arr.push(s[i].split(','))
    }
    
    answer.push(parseInt(arr[0][0])) // answer = ['2']
    
    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(!answer.includes(parseInt(arr[i][j]))) {
                answer.push(parseInt(arr[i][j]))
            }
        }
    }
    
    return answer;
}

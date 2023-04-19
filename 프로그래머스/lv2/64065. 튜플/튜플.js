function solution(s) {
    var answer = [];
    s = s.replace("{{", "").replace("}}", "").split("},{").sort((a,b) => a.length - b.length)
    
    let arr = [] 
    for(let i = 0; i < s.length; i++) {
        arr.push(s[i].split(','))
    }
    
    answer.push(parseInt(arr[0][0])) 
    
    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(!answer.includes(parseInt(arr[i][j]))) {
                answer.push(parseInt(arr[i][j]))
            }
        }
    }
    
    return answer;
}

// let newArr = JSON.parse(s.replace(/{/g,'[').replace(/}/g,']'));
//     newArr.sort((a, b) => {return a.length - b.length});
//     let temp = [];
//     for(let i = 0; i < newArr.length; i++) {
//         for(let j = 0; j < newArr[i].length; j++) {
//             temp.push(newArr[i][j]);
//         }
//     }
//     answer = [...new Set(temp)];
//     return answer;
function solution(lines) {
    let answer = 0; 
    let lineMap = new Array(200).fill(0);
    
    for(let i = 0;  i < 3; i++) {
        let start = lines[i][0];
        let end = lines[i][1];
        
        for(let j = start; j < end; j++) {
            lineMap[j + 100] += 1
        }
    }
    
    for(let line of lineMap) {
        if(line > 1) answer++
    }
    
    return answer;
}
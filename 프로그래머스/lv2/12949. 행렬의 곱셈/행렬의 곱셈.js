function solution(arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i < arr1.length; i++) {
        let result = [];
        for(let j = 0; j < arr2[0].length; j++) { // arr2.length 랑 무슨 차이일까?
            let multi = 0;
            for(let k = 0; k < arr2.length; k++) {
                multi += arr1[i][k] * arr2[k][j]
            }
            result.push(multi)
        }
        answer.push(result)
    }
    
    return answer;
}

// m * k / k * n
// 행렬 A 와 B의 곱 : m * n

function solution(answers) {
    let answer = []
    let one = [1,2,3,4,5] 
    let two = [2,1,2,3,2,4,2,5] 
    let three = [3,3,1,1,2,2,4,4,5,5] 
    // let oneCnt = answers.filter((el,index) => el === one[index]).length
    // let twoCnt = answers.filter((el,index) => el === two[index]).length
    // let threeCnt = answers.filter((el,index) => el === three[index]).length
    let oneCnt = answers.filter((el,index) => el === (one[index % one.length])).length
    let twoCnt = answers.filter((el,index) => el === (two[index % two.length])).length
    let threeCnt = answers.filter((el,index) => el === (three[index % three.length])).length

    let max = Math.max(oneCnt, twoCnt, threeCnt)
    let result = [oneCnt,twoCnt,threeCnt]
    
    for(let i = 0; i < result.length; i++) {
        if(max === result[i]) {
            answer.push(i +1)
        }
    }
return answer
}



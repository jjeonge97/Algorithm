const checkDistance = (place) => {
    let room = place.map(el => el.split(''))

    let x = [1,0,-1,0];
    let y = [0,-1,0,1];
    
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            // P일 때
            if(room[i][j] === 'P') {
                for(let k = 0; k < 4; k++) {
                    if(i+x[k] >= 0 && j+y[k] >=0 && i+x[k] < 5 && j+ y[k]<5 && room[i+x[k]][j+y[k]] === "P") {
                        return 0;
                    }
                }                
            }
            // O일 때
            if(room[i][j] === 'O') {
                let count = 0;
                for(let k = 0; k < 4; k++) {
                    if(i+x[k] >= 0 && j+y[k] >=0 && i+x[k] < 5 && j+ y[k]<5 && room[i+x[k]][j+y[k]] === "P") {
                        count++
                    }
                    if(count > 1) {
                        return 0;
                    }
                }
            }
        }
    }
    return 1
}

function solution(places) {
    let answer = [];
    for(let i of places) {
        answer.push(checkDistance(i))
    }
    return answer;
}
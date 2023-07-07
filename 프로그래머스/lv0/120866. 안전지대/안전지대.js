function solution(board) { 
    let count = 0;
    let n = board.length; 
    //const arr = Array.from(Array(n), () => Array(n).fill(0))
    const dis = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 1) {
                //arr[i][j] = 'x'
                
                for(let k = 0; k < dis.length; k++) {
                    // 현재 위치 [i][j]를 기준으로 인접한 위치 계산하는 변수
                    const dx = i + dis[k][0] // 행 변화
                    const dy = j + dis[k][1] // 열 변화
                    if(dx >= 0 && dy >= 0 && dx < n && dy < n && board[dx][dy] === 0) board[dx][dy] = 2
                }
            }
        }
    }
    // for(let i = 0; i < n; i++) {
    //     for(let j = 0; j < n; j++) {
    //         if(board[i][j] === 0) count++
    //     }
    // }
    board.forEach(row => {row.forEach(cell => {
            if (cell === 0) count++;
        });
    });
    
return count;

}
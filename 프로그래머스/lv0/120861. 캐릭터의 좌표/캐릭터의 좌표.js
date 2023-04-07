function solution(keyinput, board) {
    let x = 0;
    let y = 0;
     const range = 
          [ Math.abs( Math.floor(board[0] / 2) ), 
           Math.abs( Math.floor(board[1] / 2) ) ];
    
    for(let i = 0; i < keyinput.length; i++) {
        if(keyinput[i] === 'up')  y += 1
        else if(keyinput[i] === 'down') y -= 1
        else if(keyinput[i] === 'left') x -= 1
        else x += 1
        
         if(Math.abs(x)>range[0]){
            x = x > 0 ? range[0] : range[0] * -1;
         }
        if(Math.abs(y)>range[1]){
            y = y > 0 ? range[1] : range[1] * -1;
        }
    }
    
   
    return [x,y]
}

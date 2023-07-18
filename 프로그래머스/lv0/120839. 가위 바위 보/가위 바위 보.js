function solution(rsp) {
    const r = '0'; 
    const s = '2';
    const p = '5'; 
    
    let result = '';
    
    for(let i = 0; i < rsp.length; i++) {
        if(rsp[i] === r) result += '5';
        else if(rsp[i] === s) result += '0';
        else result += '2'
    }
    
    return result;
}
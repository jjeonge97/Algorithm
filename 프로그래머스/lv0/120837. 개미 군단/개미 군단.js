function solution(hp) {
    const first = Math.floor(hp / 5);
    const second = Math.floor((hp - first * 5) / 3);
    const last = hp - first * 5 - second * 3
    
    return first + second + last
}
function solution(sides) {
    sides.sort((a,b) => a - b)
    const longest = sides.pop()
    
    return sides[0] + sides[1] > longest ? 1 : 2
}
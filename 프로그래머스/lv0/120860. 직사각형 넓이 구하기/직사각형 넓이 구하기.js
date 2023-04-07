function solution(dots) {
    let width = []
    let height = []
    for(let i = 0; i < dots.length; i++) {
        width.push(dots[i][0])
        height.push(dots[i][1])
    }
    width = [...new Set(width)]
    height = [...new Set(height)]
    
    let x = width[0] - width[1]
    let y = height[0] - height[1]
    
    return Math.abs(x) * Math.abs(y)
}
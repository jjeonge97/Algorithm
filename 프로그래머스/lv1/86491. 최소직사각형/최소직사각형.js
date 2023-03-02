function solution(sizes) {
    let array = []
    let width = Math.max(...array.concat(...sizes))
    let height = []
    for(let i = 0; i < sizes.length; i++) {
        for(j = 0; j < sizes[i].length - 1; j++) {
            if(sizes[i][j] <= sizes[i][j + 1]) height.push(sizes[i][j])
            else height.push(sizes[i][j+1])    
        }
    }
    return width * Math.max(...height)
}

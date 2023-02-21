function solution(order) {
    let game = '369'
    return String(order).split('').filter(el => game.includes(el)).length
}
function solution(n, k) {
    let food = 12000;
    let drink = 2000; 
    
    return (food * n) + (drink * k) - (Math.floor(n / 10) * drink)
}
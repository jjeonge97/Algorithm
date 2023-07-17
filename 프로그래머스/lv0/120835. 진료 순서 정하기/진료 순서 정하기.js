function solution(emergency) {
    // emergency = [3,76,24]
    const arr = emergency.slice()
    arr.sort((a,b) => b - a)
    console.log(arr)
    // arr= [3,24,76]
    const result = [];
    
    for(let i = 0; i < emergency.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(emergency[i] === arr[j]) {
                console.log(emergency[i], arr[j])
                result.push(j + 1)
            }
        }
    }
    
    return result;
}
function solution(numbers) {
    var answer = 0;
    
    const arrNumber = [...numbers]
    const primeChecker = (num) => {
        if (num === 1 || num === 0) return false;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    const getPermutations = (arr, selectNumber) => {
        const results = [];
        if (selectNumber === 1) return arr.map((el) => [el]);

        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
            // 해당하는 fixed를 제외한 나머지 배열 
            const permutations = getPermutations(rest, selectNumber - 1); 
            // 나머지에 대해서 순열을 구한다.
            const attached = permutations.map((el) => [fixed, ...el]); 
            //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
            results.push(...attached); 
            // 배열 spread syntax 로 모두다 push
        });

        return results; // 결과 담긴 results return
    }
    const arrToNumber = (arr) =>{
        let result = [];
        
        for(let i = 0;i < arr.length ; i++){
            result.push(Number(arr[i].join('')))
        }
        
        result = [...new Set(result)];
        return result;
    }
    const arrNumberCases = (arrNumber) => {
        const result = []
        for(let i= 0; i< arrNumber.length ; i++){
            result.push(...getPermutations(arrNumber, i+1) )
        }
        return result        
    }  
    
    
    //============== 상단까지 함수 생성
    
    
    const arrPrime = arrToNumber(arrNumberCases(arrNumber))    
    
    console.log(arrNumber)
    console.log(arrNumberCases(arrNumber))
    console.log(arrPrime)
    for(let i= 0; i< arrPrime.length ; i++){
        if(primeChecker(arrPrime[i])) answer++
    }
    
    
    return answer;
}
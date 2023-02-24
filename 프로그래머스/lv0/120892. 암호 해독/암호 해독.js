function solution(cipher, code) {
    var answer = '';
   for(let i = 0; i < cipher.length; i ++) {
       if( (i + 1) % code === 0) answer += cipher[i]
   }
    return answer;
}
// arr의 Index 는 0부터 시작
// 문제에선 index 1부터 시작
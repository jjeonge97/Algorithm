function solution(a, b, n) {
// a =3; b= 2; n = 20
  let answer = 0;
    // 20; 18병주면,2병 남고, 12병을 받음 => 14병 

  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = (n % a) + Math.floor(n / a) * b
  }
  return answer;
}
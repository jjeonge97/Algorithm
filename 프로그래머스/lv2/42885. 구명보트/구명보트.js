function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  while (people.length > 0) {
    if (people[0] + people[people.length - 1] > limit) {
      answer++;
      people.pop();
    } else {
      answer++;
      people.pop();
      people.shift()
    }
  }
  return answer;
}
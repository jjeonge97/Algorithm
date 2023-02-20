function solution(my_string) {
    // var answer = ['a', 'e','i','o','u']
    const answer = 'aeiou'
    return my_string.split('').filter(el => answer.indexOf(el) === -1).join('')

    // return my_string.replace(/[aeiou]/g , '')

}
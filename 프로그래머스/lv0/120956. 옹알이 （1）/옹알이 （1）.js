function solution(babbling) {
    let words = ['aya', 'ye', 'woo', 'ma']
    
    for(let i = 0; i < babbling.length; i++) {
        for(let j = 0; j < words.length; j++) {
            if(babbling[i].includes(words[j])) {
               babbling[i] = babbling[i].replace(words[j],'x')
            }
        }
    }
    

   return babbling.map(el => el.replaceAll('x', '')).filter(el => el === '').length

}
function solution(new_id) {

    // 모든 문자 소문자로 치환
    let newId = new_id.toLowerCase()
    
    // 알파벳 소문자, '-', '_', '.' 제외한 모든 문자 제거
    newId = newId.replace(/[^\w\-\.]/g,'')

    // 마침표 2번 이상 연속된 경우 하나의 마침표로 치환
    newId = newId.replace(/\.{2,}/g,'.')
    
    // 마침표가 처음 사용됐다면 제거
    if(newId[0] === '.') newId = newId.replace('.', '')
    
    // new_id가 빈문자열이라면 'a' 대입
    if(newId === '') newId = 'a'
    
    // 길이가 16자 이상이면 첫 15개 문자 제외한 나머지 문자 제거 
    if(newId.length >= 16) newId = newId.slice(0,15)
      
     // 제거 후 마침표가 끝에 있다면 끝에 위치한 마침표 제거 
    // if(newId[newId.length - 1] === '.') newId = newId.replace('.','')
    newId = newId.replace(/\.$/, "")
    
    // 2자 이하라면 new_id 의 마지막 문자를 길이가 3 될 때까지 반복해서 끝에 붙임
    if(newId.length <= 2) {
        let lastStr = newId[newId.length - 1]
        newId = newId + lastStr.repeat(3 - newId.length)
    }
    
    return newId
}
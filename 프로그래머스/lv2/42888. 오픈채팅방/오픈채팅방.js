function solution(record) {
    const result = [];
    const userUid = {};
    const answer = [];
    
    for(let user of record) {
        let [check, uid, name] = user.split(' ')
        if(check === "Enter") {
            userUid[uid] = name;
            result.push([check, uid])
        } else if(check === "Leave") {
            result.push([check, uid])
        } else if (check === "Change") {
            userUid[uid] = name;
        }
    }
    
    for(let user of result) {
        let [check, uid] = user;
        let name = userUid[uid]
        
        if(check === "Enter") answer.push(name + '님이 들어왔습니다.')
        else answer.push(name + "님이 나갔습니다.")
    }
    
    return answer

}
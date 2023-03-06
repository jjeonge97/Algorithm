function solution(numer1, denom1, numer2, denom2) {
    let numer = denom2 * numer1 + denom1 * numer2
    let denom = denom1 * denom2
    
    // 최대공약수 리턴
    const gsm = (numer, denom) => {
        if(denom === 0) return numer
        return gsm(denom, numer%denom)
    }
    
    return [numer / gsm(numer, denom),denom / gsm(numer, denom)]
}
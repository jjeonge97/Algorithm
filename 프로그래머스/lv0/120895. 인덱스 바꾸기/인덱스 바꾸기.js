function solution(my_string, num1, num2) {

    const str = [...my_string]
    let temp = str[num1]
    str[num1] = str[num2]
    str[num2] = str[num1]
    str.splice(num1,1,my_string[num2])
    str.splice(num2,1,my_string[num1])
    //return str.join('')
    return str.join('')
}

// temp에 저장해서 하는건 왜 안돼?

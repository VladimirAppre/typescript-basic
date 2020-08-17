const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8]
const arrayOfStrings: Array<string> = ['hello', 'Vladimir']

function reverse <T>(array: T[]): T[ ] { //дженерик ди подстраивается под приходящий контнт
    return array.reverse()
}
reverse(arrayOfNumbers)
reverse(arrayOfStrings)

function getPropValue <T>(obj: T, key: keyof T): T[keyof T]{
    return obj[key]
}

const user = {
    name: 'Vladimir',
    nickName: 'Vladimir.Appre'
}
console.log(

getPropValue(user, 'name')
)


/// JavaScript

const x = 10

function sqr (x) {
    return x * x
}

function anArgument () {
    return Math.random()
}

const sqr1 = x => x * x

// n = n * (n-1) * (n-2) * ... 1
// 1! = 1
// 2! = 2 * 1!
// 3! = 3 * 2!
// 4! = 4 * 3!
// ...
// n! = n * (n - 1)!

const fact = n => {
    if (n === 1) {
        return 1
    }
    return n * fact(n - 1)
}

const factIter = n => {
    let res = 1
    for (let i = 2; i <= n; i++) {
        res *= i
    }
    return res
}

// console.log( fact(2), fact(3), fact(4), fact(5)  )
// console.log( factIter(2), factIter(3), factIter(4), factIter(5)  )

//////
// [a, b]  Գումար [a,b] միջակայքի թվերի գումարը

const intervalsumIter = (a, b) => {
    let result = 0
    for (let i = a; i <= b; i++) {
        result += i
    }
    return result
}

const intervalsumRec = (a, b) => {
    if (a > b) {
        return 0
    }
    return a + intervalsumRec(a + 1, b)
}

const intervalsumRec1 = (a, b) => {
    if (a > b) {
        return 0
    }
    return b + intervalsumRec1(a, b - 1)
}

// console.log(
//     intervalsumIter(1, 36),
//     intervalsumRec(1, 36),
//     intervalsumRec1(1, 36) )

//////////////////
// const sum = (a, b) => {
//     let result = 0
//     for (let i = a; i <= b; i++) {
//         result = result + i
//     }
//     return result
// }

// const prod = (a, b) => {
//     let result = 1
//     for (let i = a; i <= b; i++) {
//         result = result * i
//     }
//     return result
// }

const _sum = (x, y) => x + y
const _prod = (x, y) => x * y
const _sqrPair = (x, y) => x + y * y

const gorc = (a, b, action, initialValue) => {
    let result = initialValue
    for (let i = a; i <= b; i++) {
        result = action(result, i)
    }
    return result
}

const sum = (a, b) => gorc(a, b, _sum, 0)
const prod = (a, b) => gorc(a, b, _prod, 1)
const sqrPair = (a, b) => gorc(a, b, _sqrPair, 0)

//console.log( sum(3, 5), prod(3, 5), sqrPair(3, 5) )


const ajax = (url, callback) => {
    const response = {
        status: "ok",
        data: 10
    }

    const afterTimout = () => {
        callback(response)
    }

    setTimeout(afterTimout, 2000)
}

const cb = (result) => console.log(result)

console.log('start')

ajax('https://mydomain.com/asdasd.php', cb)

console.log('end')

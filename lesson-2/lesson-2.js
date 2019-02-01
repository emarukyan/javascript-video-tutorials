//////////////////////////////
///////// JavaScript LESSON 2
//////////////////////////////
// 1. Arrays, push, unshift
// 2. Array sum
// 3. Array max
// 4. Array min
// 5. Array avg
// 6. Array reverse
// 7. Array map
// 8. Array find
// 9. Array filter
// 10. Array reduce

//         0, 1, 2
const A = [6, 7, 8, 9, 10]

// const sumArray = (masiv) => {
//     let summa = 0
//     for (let i = 0; i < masiv.length; i++) {
//         summa += masiv[i]
//     }
//     return summa
// }

// sumArray([7, 8, 9])   =   7 + sumArray([8, 9])
// 7 + sumArray([8, 9]) = 7 + (8 + sumArray([9]))
// 7 + (8 + sumArray([9])) = 7 + (8 + 9 + sumArray([]))
// 7 + (8 + 9 + sumArray([])) = 7 + 8 + 9 + 0

const sumArray = (masiv) => {
    if (masiv.length === 0) {
        return 0
    }
    return masiv[0] + sumArray(masiv.slice(1))
}

// console.log( sumArray(A) )

const min = (masiv) => {
    if (masiv.length === 0) {
        return 0
    }

    let minElem = masiv[0]
    for (i = 1; i < masiv.length; i++) {
        if (minElem > masiv[i]) {
            minElem = masiv[i]
        }
    }
    return minElem
}

const avg = (masiv) => {
    if (masiv.length === 0) {
        return 0
    }
    return sumArray(masiv) / masiv.length
}

//         0, 1, 2, 3, 4
const B = [6, 7, 8, 9, 10]

const reverse = (masiv) => {
    for (let i = 0; i < masiv.length / 2; i++) {
        const replIndex = masiv.length - 1 - i
        let tmp = masiv[i]

        console.log(masiv[i], masiv[replIndex])

        masiv[i] = masiv[replIndex]
        masiv[replIndex] = tmp
    }
    return masiv
}


const find = (masiv, tiv) => {
    for (let i = 0; i < masiv.length; i++) {
        if (masiv[i] === tiv) {
            return i
        }
    }
    return null
}

const tiv = 8
const result = B.findIndex((elem) => {
    if (elem === tiv) {
        return true
    }
    return false
})

const newArr = B.map(elem => elem * elem)

const C = [-4, 1, 0, 120, -1, -100, 1000]

const positives = C.filter(elem => elem > 0)
const zuyger = C.filter(elem => elem % 2 === 0)

console.log( C )
console.log( positives )
console.log( zuyger )

const summa = C.reduce((accumulator, elem) => {
    return accumulator + elem
}, 0)

const summa1 = C.reduce((acc, elem) => acc + elem)

console.log( summa, summa1 )

const maximum = C.reduce( (acc, elem) => {
    return elem > acc ? elem : acc
})

console.log( maximum )

C.reverse()

console.log( C )

// -4, 1, 0, 120, -1, -100, 1000
// (0, -4) => { return 0 + -4 }
// (-4, 1) => { return -4 + 1 }
// (-3, 0) => { return -3 + 0 }
// (-3, 120) => { return -3 + 120 }
// (117, -1) => { return 117 + -1 }
// (116, -100) => { return 116 + -100 }
// (16, 1000) => { return 16 + 1000 }
// 1016

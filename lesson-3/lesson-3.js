// closure
const f = () => {
    let innerValue = 0
    return (tiv) => {
        if (typeof tiv !== 'undefined') {
            innerValue += tiv
            return null
        }       
        return innerValue
    }
}

const pat = f()

pat(4)
pat(5)
pat(1)
pat(10)
pat(30)
// console.log ( pat() )

/////// STACK
const stackCreator = () => {
    const storage = []
    return (item) => {
        if (typeof item !== 'undefined') {
            return storage.push(item)
        } else {
            if (storage.length === 0) {
                return undefined
            }
            return storage.pop()
        }
    }
}

const myStack = stackCreator()

myStack(3)
myStack(1)
myStack(4)
myStack(1000)

/*
while (true) {
    let nextItem = myStack()
    if (typeof nextItem === 'undefined') {
        console.log('Stack is empty!')
        break
    }
    console.log(nextItem)
}
*/


/////////////////
const booleanToggler = () => {
    let innerValue = false
    return () => {
        innerValue = !innerValue
        return innerValue
    }
}

/*
const toggler = booleanToggler()

for (let i=0; i < 100; i++) {
    if ( toggler() === false) {
        console.log(i)
    }
}
*/

////////////// CLASS

const animalCreator = (animalName, animalAge, animalType) => {
    let name = animalName
    let age = animalAge
    let type = animalType

    const nameSetter = (_name) => {
        name = _name
        return nameGetter()
    }
    const nameGetter = () => `Animal Name is: ${name}`

    return {
        nameSetter: nameSetter,
        nameGetter: nameGetter
    }
}

const newAnimal = animalCreator()

console.log ( newAnimal.nameSetter('Chalo') )
console.log ( newAnimal.nameSetter('Malo') )
console.log ( newAnimal.nameSetter('Xalo') )
// console.log( newAnimal.nameGetter() )

// const Shun = animalCreator("Chalo#2", 4, "dog")
// console.log( Shun.nameGetter() )

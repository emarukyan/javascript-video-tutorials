
const EventEmitter = () => {
    const _listeners = {}

    return {
        on: (event, listener) => {
            if (typeof listener !== 'function') {
                throw new Error('listener must be function!')
            }

            if (!_listeners[event]) {
                _listeners[event] = []
            }
            _listeners[event].push(listener)
            const remover = () => {
                _listeners[event] = _listeners[event].filter(item => item !== listener)
            }
            return remover
        },

        emit: (event, arg) => {
            if (!_listeners[event]) {
                return
            }
            _listeners[event].map(listener => listener(arg))
        },

        getListOfEvents: () => {
            return Object.keys(_listeners)
        }
    }
}

// const randomNumbers = EventEmitter()

// randomNumbers.on('number', (number) => {
//     console.log("I've got random number: " + number)
// })

// const remover = randomNumbers.on('number', (number) => {
//     console.log("I've got random number, sqr:" + (number * number))
// })

// randomNumbers.emit('number', Math.round(Math.random() * 10))
// remover()
// randomNumbers.emit('number', Math.round(Math.random() * 10))

// randomNumbers.on('text', () => {})
// randomNumbers.on('image', () => {})

// console.log( randomNumbers.getListOfEvents() )

const RandomNumberEmitter100 = () => {
    const eventEmitter = EventEmitter()

    setInterval(() => {
        eventEmitter.emit('number', Math.round(Math.random() * 100))
    }, Math.round(Math.random() * 4000))

    return {
        on: (event, listener) => {
            eventEmitter.on(event, listener)
        }
    }
}

const randomNumbs = RandomNumberEmitter100()
randomNumbs.on('number', (number) => {
    console.log('New random number: ' + number)
})

randomNumbs.on('number', (number) => {
    console.log('New random number: ' + number)
})

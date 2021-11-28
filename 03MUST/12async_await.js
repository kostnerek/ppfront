function promises() {
    const successfullPromise = timeout(100).then(result => `success: ${result}`)
    const failingPromise = timeout(200, true).then(null, error => Promise.reject(`error: ${error}`),)

    const recoveredPromise = timeout(300, true).then(null, error => Promise.resolve(`nie powiodlo sie i odzyskano: ${error}`),)

    successfullPromise.then(log, logError)
    failingPromise.then(log, logError)
    recoveredPromise.then(log, logError)
}

function asyncAwaits() {
    async function succefulAsyncAwait() {
        const result = await timeout(100)
        return `success: ${result}`
    }

    async function failingAsyncAwait() {
        const result = await timeout(200, true)
        return `error: ${result}`
    }

    async function recoveredAsyncAwait() {
        let result
        try {
            result = await timeout(300, true)
            return `nie powoiodlo sie: ${result}`
        } catch (error) {
            return `odzyskano: ${error}`
        }
    }
    succefulAsyncAwait().then(log, logError)
    failingAsyncAwait().then(log, logError)
    recoveredAsyncAwait().then(log, logError)
}

function log(...args) {
    console.log(...args)
}

function logError(...args) {
    console.error(...args)
}

function timeout(ms, error = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject(`error after ${ms}ms`)
            } else {
                resolve(`result after ${ms}ms`)
            }
        }, ms)
    })
}

//promises()
asyncAwaits()
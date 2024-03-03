const os = require('os')

const user = os.userInfo()

console.log(`user time is ${os.uptime()} in seconds`)

const currentos = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()
}

console.log(currentos)
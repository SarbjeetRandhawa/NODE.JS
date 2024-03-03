const events = require('events')

const event = new events()

event.on('res',(name , id)=>{
    console.log(`hello ${name} ${id}`)
})

event.on('res',()=>{
    console.log('hello g ')
})

event.emit('res','john' , 22)
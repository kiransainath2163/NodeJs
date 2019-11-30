const events = require('events')

let eventEmitter = new events.EventEmitter();

eventEmitter.on('Hello',()=>{
    console.log('Hello Event Handler...')
})

eventEmitter.on('PSL',()=>{
    console.log('Hello PSL')
})

eventEmitter.addListener('PSL',()=>{
    console.log('PSL Event Handler2...')
})

eventEmitter.emit('Hello')
eventEmitter.emit('PSL')
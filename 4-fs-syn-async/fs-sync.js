const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./cont/first.txt', 'utf8')
const second = readFileSync('./cont/second.txt', 'utf8')

writeFileSync(
  './cont/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
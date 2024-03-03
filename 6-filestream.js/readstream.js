const fs = require('fs')

const stream = fs.createReadStream('./cont/big.txt' ,'utf8')

stream.on('data' , (result)=>{
   console.log(result)
})
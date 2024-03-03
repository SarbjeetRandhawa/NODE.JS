const fs = require('fs')
const http = require('http')

http.createServer((req,res)=>{
//  const readtext  = fs.readFileSync('./cont/big.txt' , 'utf8')
//  res.end(readtext)

   const readfile = fs.createReadStream('./cont/big.txt' , 'utf8')
   readfile.on('open', (result)=>{
     readfile.pipe(res)
   })

   readfile.on('error',(err)=>{
    console.log(err)
   })
}).listen(5000)

const fs = require('fs')

for(let i = 0 ; i< 1000 ; i++){

    fs.writeFileSync('./cont/big.txt', `this is number ${i} \n ` , {flag:'a'})
}
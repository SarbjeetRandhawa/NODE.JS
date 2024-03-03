const { readFile, writeFile } = require('fs')
console.log('start')

readFile('./cont/first.txt' ,'utf8', (err,result) =>{
    if(err){
        return
    }
    const first = result

    readFile('./cont/second.txt' , 'utf8' , (err,result) =>{
        if(err){
            return
        }

        const second = result
        writeFile('./cont/result-async.txt' , `here is the result ${first} , ${second} ` , {flag: 'a'} , (err,result) =>{
            if(err){
                return
            }
            console.log('success')
        })
    })

})

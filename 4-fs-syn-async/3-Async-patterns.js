const {readFile,writeFile} = require('fs').promises

const start =  async () => {
    try{
        const first = await readFile('./cont/first.txt' , 'utf8')
        const second = await readFile('./cont/second.txt' , 'utf8')

        await writeFile('./cont/newfile.txt' , `new file added ${first} , ${second}` , {flag:'a'})

    }catch(e){
        console.log(e)
    }
}

start()


// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
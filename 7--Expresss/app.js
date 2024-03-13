// const http = require('http')

// const server = http.createServer((req,res)=>{

//     const url = req.url
//     if(url === '/'){

//         res.writeHead('200',{'content-type':'text/html'})
//         res.write('<h1>Hello Home Page</h1>')
//         res.end()
//     }
//     else if(url === '/about'){
//         res.writeHead('200',{'content-type':'text/html'})
//     res.write('<h1>About Page</h1>')
//     res.end()
//     }
//     else{
//         res.writeHead('404',{'content-type':'text/html'})
//     res.write('<h1>Page Not Found Page</h1>')
//     res.end()
//     }
// })

// server.listen(5000)


// const express = require('express')
// const path  = require('path')
// const app = express()

// app.use(express.static('../navbar_app/public'))
// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'../navbar_app/app.html'))
// })
// app.get('/about',(req,res)=>{
//     res.send('About page')
// })
// app.all('*',(req,res)=>{
//     res.status(404).send(' page not found')
// })



// app.listen('5000',()=>{
//     console.log('listining')
// })


const express = require('express')
const app  = express()
const {products} = require('./data')

app.get('/',(req,res)=>{

    res.write('<h1>home page</h1> <a href="./api/products">Products</a>')
})
app.get('/api/products',(req,res)=>{
    
    const newproducts = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })
    res.json(newproducts)
})

// app.get('/api/products/1',(req,res)=>{
    
//     const singleproducts = products.find((product)=> product.id === 1)
//     res.json(singleproducts)
// })
app.get('/api/products/:productID',(req,res)=>{
    
    const {productID} = req.params
    const singleproducts = products.find((product)=> product.id === Number(productID))
    if(!singleproducts){
       return res.status(404).send('not found')
    }
    return  res.json(singleproducts)
})


app.listen('5000',()=>{
    console.log("listining")
})
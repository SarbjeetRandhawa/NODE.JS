const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        
        res.end('home')
    }
    if(req.url === '/about'){
      
        res.end('about')
    }

    res.end(
        `
        <h1>opps</h1>,
        <p>page not found </p>,
        <a href="/">go to home</a>
        `
    )
})

server.listen(5000)
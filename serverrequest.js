const http=require('http')

const serv=http.createServer((req,res)=>{

    console.log(req.headers);
    const url=req.url;
    res.setHeader('Content-type','Text/Html');

    if(url==='/node'){
        res.write('<html>')
        res.write('<head><title>Server PAge</title></head>');
        res.write('<body><h1>Welcome to my Node Js Project</h1></body>');
        res.write('</html>')
        res.end();
        
    }
    if(url==='/home'){
        res.write('<html>')
        res.write('<head><title>Server PAge</title></head>');
        res.write('<body><h1>Welcome to Home Page</h1></body>');
        res.write('</html>')
        res.end();
        
    }

    if(url==='/about'){
        res.write('<html>')
        res.write('<head><title>Server PAge</title></head>');
        res.write('<body><h1>Welcome to About Us Page</h1></body>');
        res.write('</html>')
        res.end();
        
    }

    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>Server PAge</title></head>');
        res.write('<body><h1>Welcome to Node JS Server</h1></body>');
        res.write('</html>')
        res.end();
        
    }
    
    
})

serv.listen(4000);
console.log("Server Startet")
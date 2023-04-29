const http = require('http')

const serv = http.createServer((req, res) => {
    const f = require("fs")
    
    const url = req.url;
    res.setHeader('Content-type', 'Text/Html');
    const meth = req.method;
    

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Server PAge</title></head>');
        res.write('<body><h1>Welcome to Node JS Server</h1></body>');
        const prt=f.readFileSync('newfile.txt');
            res.write(`<p>${prt}</p>`);

        res.write('<body><form action="/mess" method="POST"><input type="text" name="mess"><button type="submit">Send</button></body>')
        res.write('</html>')
        res.end();

    }
    if (url === '/mess' && meth === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsebody = Buffer.concat(body).toString();
            console.log(parsebody);
            const str = parsebody.split('=')[1];
            f.writeFileSync('newfile.txt', str)

            
            
            res.statusCode = 302;
            res.setHeader('location', '/')
            res.end();

        })

    }
   

})

serv.listen(4000);
console.log("Server Startet....")
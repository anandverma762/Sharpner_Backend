const http = require('http')
const rt = require('./routes')

// console.log(rt.key)
console.log(rt.sometext)
const serv=http.createServer(rt.handler)

serv.listen(4000);
console.log("Server Startet....")

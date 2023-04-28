const http = require('http')
const rt = require('./route')

const serv=http.createServer(rt)

serv.listen(4000);
console.log("Server Startet....")
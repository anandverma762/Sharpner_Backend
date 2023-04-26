const http=require('http')

const serv=http.createServer((res,rej)=>{

    console.log("Anand");
    
})

serv.listen(4000);
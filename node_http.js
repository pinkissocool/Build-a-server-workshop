const http = require('http');
//This code gets the http and lets us use it as a variable
const server = http.createServer((req,res)=> {
    if(req.url === "/"){
        res.write('Hello World');
        res.write("This is our first server");
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.write('This is a list of offerings');
        res.write(' at BTHS');
        res.end();
    }
});
server.listen(3000);
console.log("Listening on port 3000 ...");
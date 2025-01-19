var http=require('http');
http.createServer(junction(req,res){
    res.writeHead(200,{'content_Type':'text/html'});
    res.write('hello world!');
    res.end();
}).listen(8080);
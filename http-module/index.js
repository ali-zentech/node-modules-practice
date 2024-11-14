import http from 'http'; 

const server = http.createServer((req, res) => {
    res.writeHead(200,"success", {'Content-Type': 'text/html'})
    // we can also do different page reouting. 
    if(req.url === '/') {
        res.write('Hello World!'); 
    } else if(req.url === '/dashboard') {
        res.write('Hello to the dashboard!'); 
    } else {
        res.write('Oops, 404 page not found'); 
    }
    res.end(); 
  }); 
  
  
server.listen(8080, ()=> {
    console.log('server started on port 8080')
})
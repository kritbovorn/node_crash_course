const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Set Header Content Type
    res.setHeader('Content-Type', 'text/html');

    // Send HTML File to Browser
    fs.readFile('./views/index.html', {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
            return
        }
        res.write(data);
        res.end();
    })
});

server.listen(5000, 'localhost', () => {
    console.log('Server is listening on PORT: 5000...');
})
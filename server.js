const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Set Header Content Type
    res.setHeader('Content-Type', 'text/html');

    // Define : path
    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        // Redirect path
        case '/about-me':
            res.setHeader('Location', '/home');    // redirect path to ...
            res.statusCode = 301;
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Send HTML File to Browser
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
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
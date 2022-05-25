const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Set Header Content
    res.setHeader('Content-Type', 'text/html');

    // Route
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/about-me':                           // Redirect to '/about'
            res.statusCode = 301;
            res.setHeader('Location', '/about');    // $$$$$ : Redirect to '/about'
            res.end();                              // Redirect to '/about'
            break;
        default:
            path += '404.html';
            break;
    }

    // Show HTML in Browser
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log('Oops!!! Have error' + err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }

    });
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for request on PORT 3000');
});
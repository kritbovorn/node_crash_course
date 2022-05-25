const express = require('express');

// express app
const app = express();


// Listen for Request port 3000
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<h1>Home Page นะจ๊ะ</h1>');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('<h1>About Page นะจ๊ะ</h1>');
    res.sendFile('./views/about.html', { root: __dirname });
});

// Redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 Page
app.use((req, res) => {
    res.statusCode(404).sendFile('./views/404.html', { root: __dirname });
})
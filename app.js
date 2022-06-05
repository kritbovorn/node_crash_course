const express = require('express');

// express app
const app = express();

// ### Register view ejs
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '},
        {title: 'how to defeast browser', snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '},
    ];
    res.render('index', { title: 'Home Page', blogs: blogs});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create new blog'});
})

app.use((req, res) => {
    res.status(404).render('404', { title: 'Oops...Page not founded'});
});


app.listen(5000, () => {
    console.log('Server listen to port 5000');
});
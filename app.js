const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();


// ### Register view ejs
app.set('view engine', 'ejs');

// middle ware & static files
app.use(express.static('public'));

// Connect Database: mongo DB ( Use mongoose )
const dbURI = 'mongodb+srv://kritbovorn:8elyCq4oozrHlbTj@ninjatutor.hb4ez.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI).then((result) => {
    app.listen(5000);
}).catch((err) => {
    console.log(err);
});


// Middleware
app.use(morgan('dev'));

// mongoose and mongo

// Add BLog
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog2',
        snippet: 'about my new blog2',
        body: 'more about my new blog.......'
    });

    blog.save().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
    });
});

// All Blog
app.get('/all-blogs', (req, res) => {
    Blog.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});

// Selected Blog
app.get('/selected-blog', (req, res) => {
    Blog.findById('629c9043042f3ce8bed9ebf7').then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});

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
});

app.use((req, res) => {
    res.status(404).render('404', { title: 'Oops...Page not founded'});
});


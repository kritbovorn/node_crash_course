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


app.get('/', (req, res) => {
    res.redirect('/blogs');
});


app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page'});
});

// Blog Routes
app.get('/blogs', (req,res) => {
    Blog.find().sort({createdAt: -1}).then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result})
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create new blog'});
});

app.use((req, res) => {
    res.status(404).render('404', { title: 'Oops...Page not founded'});
});


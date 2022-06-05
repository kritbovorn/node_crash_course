const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes/blog_routes');

// express app
const app = express();

// Connect Database: mongo DB ( Use mongoose )
const dbURI = 'mongodb+srv://kritbovorn:8elyCq4oozrHlbTj@ninjatutor.hb4ez.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI).then((result) => {
    app.listen(5000);
}).catch((err) => {
    console.log(err);
});

// ### Register view ejs
app.set('view engine', 'ejs');

// middle ware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
// app.use(express.urlencoded());


// Middleware
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.redirect('/blogs');
});


app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page'});
});

// Blog routes in :::  blog_routes.js
app.use('/blogs', router);

app.use((req, res) => {
    res.status(404).render('404', { title: 'Oops...Page not founded'});
});


const express = require('express');

// express app
const app = express();

// morgan
const morgan = require('morgan');
// mongoose
const mongoose = require('mongoose');

// Import Blog
const Blog = require('./models/blog');

// Connect to MongoDB
const dbURI = 'mongodb+srv://boie:B11MLQa9fOdveWMw@nodetutor.jpayl.mongodb.net/?retryWrites=true&w=majority'
//  Use mongoose
mongoose.connect(dbURI).then((result) => {
    console.log('Connect DataBase Sirrrrrrrrrr');
    // Listen Port: 3000
    app.listen(3000);
}).catch((error) => {
    console.log('Have Errorrrrrrrr' + error);
});

// Register View Engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');    //  if we want to change folder of Views



// ###  Middle Ware & Static files
app.use(express.static('public'));      // File in this : public folder : can access entire app


// ###  Use morgan
app.use(morgan('dev'));

// ### Test add Data to Database





// Routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Blog Routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 }).then((result) => {
        res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch((err) => {
        console.log('Oops : Could not Fetch all Data to show ' + err);
    });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});
// 404 Page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})
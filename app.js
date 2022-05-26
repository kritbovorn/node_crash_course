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
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New Blog 3',
        snippet: 'About my new blog and every things',
        body: 'More about my new some blog.',
    });

    blog.save().then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log('Oops!! ' + err);
    });
});


// Find Allssss
app.get('/all-blogs', (req, res) => {
    Blog.find().then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log('Oops : cannot show all Blogs ' + err);
    });
});

// Find Single blog
app.get('/single-blog', (req, res) => {
    Blog.findById('628f83d3d26b9a928e05b120').then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log('Oops : Cannot get Data from ID');
    });
});




// Routes
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});
// 404 Page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})
const express = require('express');

// express app
const app = express();

// morgan
const morgan = require('morgan');
// mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
const dbURI = 'mongodb+srv://kritbovorn:JNsBuHYtFxxwXfDq@nodetutorial.ftuix.mongodb.net/?retryWrites=true&w=majority'
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
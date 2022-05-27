const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const Blog = require('./models/blog'); 

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://boie:B11MLQa9fOdveWMw@nodetutor.jpayl.mongodb.net/?retryWrites=true&w=majority";

const blogRoutes = require('./routes/blog_routes');

// express app
const app = express();



mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log('Could not connet ' + err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// ### Use : blogRoutes from another file
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
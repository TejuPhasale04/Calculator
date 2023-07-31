const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;

// Static files
app.use(express.static('public'));

// Set the view engine to 'hbs'
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Register partials (assuming you have partial files in the "views/partials" directory)
hbs.registerPartials(__dirname + '/views/partials');

// Routes
app.get('/', (req, res) => {
  res.render('Cal'); // Render the 'Cal' view
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

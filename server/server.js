const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3001;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(require('./api'));

// Define the home page route.
app.get('/', function(req, res) {
    res.send('Our first route is working.:)');
});



app.listen(port, () => console.log(`Listening on port ${port}!`));
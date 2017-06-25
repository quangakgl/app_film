const express = require('express');
const app = express();
const routes = require('./routes');
const nunjucks = require('nunjucks')
const bodyParser = require("body-parser")
const path = require('path');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.use(bodyParser.urlencoded({
    extended: true
}));
//app.use('/public', express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

// Serve static assets from the public folder


// Routes

app.get('/', routes.home);

app.get('/star_wars_episode/:episode_number?', routes.movie_single);




// Listen on port 3000
app.listen(process.env.PORT || 3000,() => {
    console.log('listen port 3000')
});
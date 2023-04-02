var express  = require('express');

var app = express();

var port = 1337;

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express(__dirname + '/public'));
app.use(express.static('public/images'));
app.use(express.static('public/css'));
app.use(express.static('public/js'));
app.use(express.static('public/data'));


app.get('/pinkflicker', function(req, res){
	res.render('layouts/pk', {title: 'Pink Flicker', imgURL: 'pink_flicker.jpeg', spotify: 'spotify.png', apple:'apple.png', amazon: 'amazon.png', width: '50px', height:'50px',
	width1:'70px', script1: 'jen.js', script2:'pinkhtml.js'});
});

app.get('/queenplay', function(req, res){
	res.render('layouts/queenplay', {title: 'QUEEN PLAY', imgURL: 'qp.jpg', imgURL1: 'queenplay.jpeg', imgURL2:'newjen.JPG',spotify: 'spotify.png', apple:'apple.png', amazon: 'amazon.png', width: '50px', height:'50px',
	width1:'70px', script1: 'qpxml.js'});
});

app.get('/releases', function(req, res){
	res.render('layouts/releases', {class: 'content', divclass:'mySlides fade', subclass:'numbertext', default: '500px', imgURL1: 'bop.jpeg', imgURL2:'jazzkids.jpeg',imgURL3: 'qplay.jpeg', imgURL4:'vague.jpeg', imgURL5: 'sink.jpeg', 
	script1: 'script.js', script2:'qp-json.js'});
});

app.get('/index', function(req, res){
	res.render('layouts/index', {class: 'cont', class2: 'indexpics', a1: 'artist1', a2:'artist2', imgURL1: 'pink_flicker.jpeg', default: '300px', height:'250px',
	imgURL2:'queenplay.jpeg', credits: 'credits'});

});

app.get('/contact', function(req, res){
	res.render('layouts/contact', {class: 'content', subclass:'container', fname:'name_error', lname:'last_error', email:'email_error', sub:'sub_error',
	type:'text',min:'1', input:'button', script1:'modernizr-custom1.js', script2:'form.js'});

});

app.use(function(req, res){
	res.status(404);
	res.render('layouts/404', {title: 'Page not found'});

});

app.use(function(err, req, res,next){
	console.error(err.stack)
	res.status(505);
	res.render('layouts/505');

});
app.listen(port, function(){
	console.log('Listening on http://localhost:'+ port +": press ctrl + c to quit");

});
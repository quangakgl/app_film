const { db, } = require('../pgp');
const moviesJSON = require('../movies.json');
exports.home = (req,res) =>{
    db.any('SELECT * FROM movies')
        .then( data =>{
            console.log(data);

            res.render('home',{
                title : 'Star Wars Movies App',
                movies : data
            })
        } )


}
exports.movie_single = (req, res) => {
    let episode_number = req.params.episode_number;
    if (episode_number <= 6 && episode_number >= 1) {
        db.any('SELECT * FROM movies WHERE episode_number = ' + episode_number)
            .then(data => {
                res.render('movie_single', {
                    movies: data
                })

            })
    }else {
        let movies = moviesJSON.movies;

        res.render('notFound', {
            title: "Star Wars Movies",
            movies : movies
        });
    }
}








// // Movie-single route
// exports.movie_single = function(req, res) {
// 	let episode_number = req.params.episode_number;
//
// 	let movies = moviesJSON.movies;
//
// 	// Only render the movie_single template for episodes that exist
// 	if (episode_number >= 1 && episode_number <= 6) {
//
// 		let movie = movies[episode_number - 1];
//
// 		let title = movie.title;
//
// 		let main_characters = movie.main_characters;
//
// 		res.render('movie_single', {
// 			movies : movies,
// 			movie : movie,
// 			title : title,
// 			main_characters : main_characters
// 		});
//
// 	} else {
// 		res.render('notFound', {
// 			movies : movies,
// 			title : "Oops, this page doesn't exist"
// 		});
// 	}
//
// };
//
// // Route for all other page requests
// exports.notFound = function(req, res) {
// 	let movies = moviesJSON.movies;
// 	res.render('notFound', {
// 		movies : movies,
// 		title : "Oops, this page doesn't exist"
// 	});
// };
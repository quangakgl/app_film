/**
 * Created by quang on 22/06/2017.
 */
const pgp = require('pg-promise')();
const  db = pgp('postgres://postgres:123@localhost:5432/movies');
let data = require('./movies.json');

for(let count in data){
    data[count].forEach((item) => {
        db.any('insert into movies(episode_number, title, main_characters, description, poster, hero_image) values ($(episode_number), ${title},${main_characters},${description},${poster},${hero_image})', item)
            .then(()=>{
                console.log('import succeed');
            })
            .catch(error => {
                console.log(error);
            });
    })
}
// for(let count in data){
//     db.any('insert into movies(episode_number, title, main_characters, description, poster, hero_image) values ($(episode_number), ${title},${main_characters},${description},${poster},${hero_image})', item)
//         .then(()=>{
//         console.log('import succeed');
// })
// .catch(error => {
//         console.log(error)
//     });
// }
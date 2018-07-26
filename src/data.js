require('es6-promise').polyfill();
require('isomorphic-fetch');

let showObj = { shows: [] };

getShows = (i) => {
  fetch(URL + i)
    .then((res) => res.json())
    .then((data) => (showObj.shows = showObj.shows.concat(data)));
};

const URL = 'https://api.tvmaze.com/shows?page=';
for (let i = 0; i < 152; i++) {
  getShows(i);
}

let showsJSON = JSON.stringify(showObj);
// const URL = 'http://api.tvmaze.com/shows?page=';
// let showObj = { shows: [] };

// for (let i = -1; i < 152; i++) {
//   fetch(URL + i)
//     .then((res) => res.json())
//     .then((data) => pushShows(data));
// }
// let results = JSON.stringify(showObj);
// console.log(results);

// pushShows = (data) => {
//   debugger;
//   showObj.shows.concat(data);
// };






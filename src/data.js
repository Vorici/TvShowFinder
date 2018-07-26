require("es6-promise").polyfill();
require("isomorphic-fetch");

let showObj = { shows: [] };
const URL = "https://api.tvmaze.com/shows?page=";

getShows = i => {
  return fetch(URL + i)
    .then(res => res.json())
    .then(data => {
      const englishData = data.filter(show => {
        return show.language.toLowerCase() === "english";
      });
      showObj.shows = showObj.shows.concat(englishData);
    });
};

function waitForShows(i = 0) {
  if (i < 152) {
    getShows(i).then(() => waitForShows(i + 1));
  } else {
    return;
  }
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

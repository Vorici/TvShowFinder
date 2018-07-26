const startTime = new Date();
let showArray = [];

getShows = (i) => {
  fetch(URL + i)
    .then((res) => res.json())
    .then((shows) => [...showArray, shows])
    .then((endTime) => {
      const finalTime = new Date();
      console.log((finalTime.getTime() - startTime.getTime()) / 1000);
    });
};

const URL = 'http://api.tvmaze.com/shows?page=';
for (let i = 0; i < 151; i++) {
  getShows(i);
}

console.log(showArray);

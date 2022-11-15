// fetch(
//   `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=hype&apikey=${API_KEY}`
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

const filmBox = document.querySelector("#film-box");

fetch(`https://ghibliapi.herokuapp.com/films`)
  .then((res) => res.json())
  .then((allFilms) => {
    allFilms.forEach((oneFilm) => {
      renderFilms(oneFilm);
    });
  });

function renderFilms(film) {
  const filmElement = document.createElement("div");

  filmBox.append(filmElement);

  filmElement.innerHTML = `<h2 class="heading-primary">${film.title}</h2>
  <img class="img" src=${film.image} />
  <p class="description">${film.description}</p>
  <p class="release-date">${film.release_date}`;
}

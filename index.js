// Global variables

const filmBox = document.querySelector("#film-box");
let currentFilm;

// Fetching Studio Ghibli API

fetch(`https://ghibliapi.herokuapp.com/films?limit=9`)
  .then((res) => res.json())
  .then((allFilms) => {
    allFilms.forEach((oneFilm) => {
      renderFilms(oneFilm);
    });
  });

// Function that renders the films

function renderFilms(film) {
  currentFilm = film;
  const commentSection = document.createElement("div");
  const filmTitle = document.createElement("h2");
  const filmImage = document.createElement("img");
  const watchedBtn = document.createElement("span");
  const rating = document.createElement("span");
  const form = document.createElement("form");
  const descriptionBox = document.createElement("div");
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  rating.className = "rating-text";
  watchedBtn.textContent = "Unwatched";
  watchedBtn.className = "watched-btn";
  form.className = "comment-form";

  commentSection.className = "comment-text";
  commentSection.innerHTML = `<h2 class="heading-tertiary">How did you like the movie?</h2>`;

  // Appends all the created elements to the overall container

  filmBox.appendChild(cardContainer);

  cardContainer.append(
    filmTitle,
    filmImage,
    descriptionBox,
    rating,
    watchedBtn,
    commentSection,
    form
  );

  // Renders comment form
  form.innerHTML = `<form><input type="text" id ="comment" name="comment" placeholder="Discuss the movie.." />
  <button class="comment-btn">Comment</button></form>`;

  // Adds a comment to the comment section
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = e.target["comment"].value;
    comment.className = "comment-text";
    console.log(comment);
    let p = document.createElement("p");

    p.textContent = comment;

    commentSection.appendChild(p);
    e.target.reset();
  });

  // Renders film title and image

  filmImage.className = "img";
  filmImage.src = film.image;
  filmTitle.textContent = film.title;
  filmTitle.className = "heading-secondary";
  rating.textContent = `Rating: ${film.rt_score} points`;

  // Renders details when image is clicked
  let clicked = false;

  filmImage.addEventListener("click", () => {
    if (clicked === false) {
      currentFilm = film;
      clicked = true;
      const description = document.createElement("p");
      const releaseDate = document.createElement("p");
      description.className = "description-text";
      releaseDate.className = "release-date";

      descriptionBox.append(description, releaseDate);

      description.textContent = currentFilm.description;
      console.log(description);
      releaseDate.textContent = `Release Date: ${currentFilm.release_date}`;
      console.log(releaseDate);
    }
  });

  // Toggles glow when you hover an image

  filmImage.addEventListener("mouseenter", () => {
    filmImage.style.filter = `drop-shadow(0 0 1em rgba(103, 167, 202, 0.469))`;
    filmImage.style.transition = `all 0.3s`;
  });

  filmImage.addEventListener("mouseleave", () => {
    filmImage.style.filter = `none`;
    filmImage.style.tranistion = `0.3s`;
  });

  // Toggles watched and unwatched button

  watchedBtn.addEventListener("click", () => {
    currentFilm.watched = !currentFilm.watched;
    watchedBtn.textContent = currentFilm.watched ? "Watched" : "Unwatched";
  });
}

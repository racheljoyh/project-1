// Global variables

const filmBox = document.querySelector("#film-box");
const likes = document.querySelector("#like-count");

let currentFilm;
let count = 1;

fetch(`https://ghibliapi.herokuapp.com/films`)
  .then((res) => res.json())
  .then((allFilms) => {
    allFilms.forEach((oneFilm) => {
      renderFilms(oneFilm);
    });
  });

function renderFilms(film) {
  currentFilm = film;
  const commentSection = document.createElement("div");
  const filmTitle = document.createElement("h2");
  const filmImage = document.createElement("img");
  const btn = document.createElement("button");
  const likeCount = document.createElement("span");
  const form = document.createElement("form");
  const descriptionBox = document.createElement("div");
  btn.className = "like-btn";

  commentSection.className = "comment-text";
  commentSection.innerHTML = `<h2 class="heading-tertiary">How did you like the movie?</h2>`;

  likeCount.className = "like-number";
  btn.textContent = "Like";
  filmBox.append(
    filmTitle,
    filmImage,
    descriptionBox,
    btn,
    likeCount,
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

  // Adds likes when button is clicked
  btn.addEventListener("click", () => {
    likeCount.textContent = ` ${count++} likes`;
  });
}

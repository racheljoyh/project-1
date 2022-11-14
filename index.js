// fetch(
//   `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
//     query
//   )}&key=${API_KEY}`
// );

fetch(
  `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=hype&apikey=${API_KEY}`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

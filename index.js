// fetch(
//   `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
//     query
//   )}&key=${API_KEY}`
// );

fetch(
  `http://api.musixmatch.com/ws/1.1/track.search?apikey=${API_KEY}q_artist=drake`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

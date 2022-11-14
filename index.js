// GET request from our API

fetch(
  `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=hype&apikey=${API_KEY}`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

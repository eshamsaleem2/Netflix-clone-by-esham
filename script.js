const nav2 = document.getElementById("nav2");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    nav2.classList.add("nav2__black");
  } else {
    nav2.classList.remove("nav2__black");
  }
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

function openMovie() {
  window.location.href = `movie.html? id=${119051}`;
}

const params = new URLSearchParams(window.location.search);
const movieId = 119051;
const API_KEY = "4a6147448172611650a860866465a72b";
async function getMovieDetails() {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}`,
  );
  console.log(movieId);
  console.log(response);
  const movie = await response.json();
  console.log(movie);
  console.log(movie.poster_path);
  document.getElementById("movie-poster").src =
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  document.getElementById("title").innerText = movie.name;
  document.getElementById("overview").innerText = movie.overview;

  document.getElementById("rating").innerText =
    `⭐ ${movie.vote_average.toFixed(1)}/10`;

  document.getElementById("release-date").innerText =
    `Released: ${movie.first_air_date}`;

  const genresContainer = document.getElementById("genres");
  movie.genres.forEach((genre) => {
    const span = document.createElement("span");
    span.innerText = genre.name;
    genresContainer.appendChild(span);
  });
}

const moviePoster = document.getElementById("movie-poster");
if (moviePoster) {
  getMovieDetails();

  moviePoster.addEventListener();

  document.querySelector(".like-btn").addEventListener("click", () => {
    alert("Added to the liked videos");
  });

  document.querySelector(".play-btn").addEventListener("click", () => {
    alert("movie play feature");
  });
  document.querySelector(".trailer-btn").addEventListener("click", () => {
    (window, open(`https://youtu.be/Di310WS8zLk?si=u37LukBSTFshJor1`));
  });

  document.querySelector(".list-btn").addEventListener("click", () => {
    alert("Added to my list");
  });
  document.querySelector(".share-btn").addEventListener("click", async () => {
    if (navigator.share) {
      await navigator.share({
        title: movie.name,
        text: movie.overview,
        url: window.location.href,
      });
    } else {
      alert("sharing is not supported in this browser");
    }
  });
}

const banners = document.querySelectorAll(".banner");
console.log(banners.length);
let current = 0;
setInterval(() => {
  banners[current].classList.remove("active");
  current++;
  if (current >= banners.length) {
    current = 0;
  }
  banners[current].classList.add("active");
}, 4000);

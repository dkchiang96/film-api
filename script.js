// Get all DOM elements in index.html

const filmIdInput = document.getElementById('filmIdInput');
const apiOutput = document.getElementById('apiOutput');
const searchButton = document.getElementById('search');

// Fetch file from API

async function fetchFilms(filmId) {
  const response = await fetch(`https://swapi.dev/api/films/${filmId}`);
  const data = await response.json();
  return data;
}

searchButton.addEventListener('click', async () => {
  const filmId = filmIdInput.value;
  const filmsData = await fetchFilms(filmId);
  apiOutput.innerHTML = `
  <h1>${filmsData.title}</h1>
  <p>Director: ${filmsData.director}</p>
  <p>Opening Crawl: ${filmsData.opening_crawl}</p>
  <p>Release Date: ${filmsData.release_date}</p>
  `;
});

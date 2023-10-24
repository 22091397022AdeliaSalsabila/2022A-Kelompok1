const API_KEY = "165b7f43e35f489f9fb0385aeba7bed3";
const url = "https://newsapi.org/v2/everything?q=";

async function fetchData(query) {
  const res = await fetch(${url}${query}&apiKey=${API_KEY});
  const data = await res.json();
  return data;
}

fetchData("all").then((data) => renderMain(data.articles));

//render news
function renderMain(arr) {
  let mainHTML = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].urlToImage) {
      mainHTML += `
        <div class="card">
          <a href="${arr[i].url}">
            <img src="${arr[i].urlToImage}" loading="lazy" />
            <h4>${arr[i].title}</h4>
            <div class="publishbyDate">
              <p>${arr[i].source.name}</p>
              <span>•</span>
              <p>${new Date(arr[i].publishedAt).toLocaleDateString()}</p>
            </div>
            <div class="desc">
              ${arr[i].description}
            </div>
          </a>
        </div>`;
    }
  }

  document.querySelector("main").innerHTML = mainHTML;
}

const searchButton = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = await fetchData(searchInput.value);
  renderMain(data.articles);
});

async function Search(query) {
  const data = await fetchData(query);
  renderMain(data.articles);
}

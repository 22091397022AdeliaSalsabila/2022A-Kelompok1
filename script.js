const API_KEY = "165b7f43e35f489f9fb0385aeba7bed3";
const url = "https://newsapi.org/v2/everything?q=";

async function fetchData(query) {
  try {
    const res = await fetch(`${url}${API_KEY}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

fetchData("all")
  .then((data) => {
    if (data) {
      renderMain(data.articles);
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// render news
function renderMain(arr) {
  let mainHTML = "";
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
  if (data) {
    renderMain(data.articles);
  }
});

// Users forEach loop
users?.forEach((user) => {
  console.log(user.comments?.length);
});

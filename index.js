let searchValue = document.querySelector(".search input");

let searchButton = document.querySelector(".search button");
let mContainer = document.querySelector(".movie-container");
let title = "avenger";
getDetails(title);
searchButton.addEventListener("click", (data) => {
  title = searchValue.value;

  mContainer.innerHTML = "";
  getDetails(title);
});

function getDetails(movieName) {
  let mBox = "";
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=09ed0b3699d91eb46176af38ea2466b5&query=${movieName}`
  )
    .then((response) => response.json())
    .then((data) => {
      const value = data.results;
      console.log(value);
      value.map((prod) => {
        mBox += `<div class="movie-card">
        <img src="https://image.tmdb.org/t/p/w185/${prod.poster_path}" />
       <p>${prod.title}</p>
       <button id="view-detail" onclick ="movieSelected('${prod.id}')">View Details</button>
      

   </div>`;
        // console.log(prod.id);
      });
      searchValue.value = "";
      mContainer.innerHTML = mBox;
    });
}
function movieSelected(firstId) {
  // console.log(id);

  sessionStorage.setItem("movieId", firstId);
  window.location = `viewPage.html?id=${firstId}`;
}

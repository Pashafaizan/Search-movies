const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

let viewHtml = document.querySelector("#main-container-view");

let mBox1 = "";
// let movieId = sessionStorage.getItem("movieId");
// console.log(movieId);
fetch(
  `https://api.themoviedb.org/3/movie/${id}?api_key=09ed0b3699d91eb46176af38ea2466b5`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let id = data.imdb_id;
    console.log(data.imdb_id);
    console.log(data.genres.name);
    mBox1 = ` <h3 class="home"><a href="index.html">Home</a></h3>
        <hr />
        <div class="box-a">
           <div class="details">
               <img src="https://image.tmdb.org/t/p/w185/${data.poster_path}" /> 
               <div class="all-details">
                <h2 class="mission">Mission :${data.original_title}</h2>  
                <h4  ><span class="first">Genere:</span>${data.genres[0].name}</h4>
                <h4 ><span class="first">Released:</span>${data.release_date}</h4>
                <h4  ><span class="first">Rated:</span>${data.vote_average}</h4>
                <h4  ><span class="first">Popularity:</span>${data.popularity}</h4>
                <h4  ><span class="first">Revenue:</span>${data.revenue}</h4>
                <h4  ><span class="first">Runtime :</span>${data.runtime}</h4>
                </div>
          </div>
        
         <div class="plot">
            <h1>Plot</h1>
            <p>${data.overview}</p>
         
          </div>
          <div class="btn">
           
          <button><a href="index.html">Back to home</a></button>
          <button><a href="https://www.imdb.com/title/${id}">Watch on IMDB</a></button>
         
          </div>
        </div>`;
    viewHtml.innerHTML += mBox1;
  });

const apiKey = "api_key=796db7d0893f3d1afc00825680c280e5";

const baseUrl = "https://api.themoviedb.org/3";

const apiUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;

const imgUrl = "https://image.tmdb.org/t/p/w500";

const searchURL = baseUrl + '/search/movie?' + apiKey;

const main = document.querySelector("#main")

const input = document.querySelector("#searchMovie")

const button = document.querySelector("#searchBtn")

const getMovies = async (url) => {
    const res = await axios.get(url)
    // console.log(res.data.results)
    showMovies(res.data.results);

}


function showMovies(data) {

    for (let movie of data) {
        const { title, poster_path, vote_average } = movie;
        const newEl = document.createElement('div');
        newEl.classList.add('movie')
        newEl.innerHTML = `
        <div class="card">
            <img src= "${imgUrl + poster_path}">
            <div class="contain">
                <h4><b>${title}</b></h4> 
                <span> Rating: ${vote_average}</span>
            </div>
        </div>
      `;

        main.append(newEl)

    }
}


button.addEventListener("click", (e) => {
    e.preventDefault();
    const searchTerm = input.value;

    if (searchTerm) {
        getMovies(searchURL + '&query=' + searchTerm)
    }



})




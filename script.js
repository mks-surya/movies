// script.js

async function searchMovie(){

    let movieName = document.getElementById("movieName").value;

    let apiKey = "YOUR_API_KEY";

    let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    let response = await fetch(url);

    let data = await response.json();

    if(data.Response == "False"){

        document.getElementById("movieBox").innerHTML = `
            <h2 style="text-align:center;margin-top:20px;">
                Movie Not Found 😢
            </h2>
        `;

        return;
    }

    document.getElementById("movieBox").innerHTML = `

    <div class="movie-card">

        <img src="${data.Poster}" alt="Movie Poster">

        <div class="movie-info">

            <h2>${data.Title}</h2>

            <p><b>Year:</b> ${data.Year}</p>

            <p><b>Genre:</b> ${data.Genre}</p>

            <p><b>Actors:</b> ${data.Actors}</p>

            <p class="rating">⭐ IMDB Rating: ${data.imdbRating}</p>

            <p>${data.Plot}</p>

        </div>

    </div>
    `;
}

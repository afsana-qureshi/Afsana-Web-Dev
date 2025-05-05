document.getElementById('addMovie').addEventListener('click', addMovie)
document.getElementById('clear').addEventListener('dblclick', clear)

function addMovie(){
    let title = document.getElementById('title').value
    let publisher = document.getElementById('publisher').value
    let image = document.getElementById('url').value
    
    if (title == '' || publisher == '' || image == ''){
        alert (`Please fill in all fields`)
        return
    }
   
   
    let movie = {
        movieTitle : title,
        moviePublisher : publisher,
        imageUrl : url,
    }
    addToList(movie)
    let movies = JSON.parse(localStorage.getItem('movies')) || []
    movies.push(movie)
    localStorage.setItem('movies', JSON.stringify(movies))

   document.getElementById('title').value = ''
   document.getElementById('publisher').value = ''
   document.getElementById('url').value = ''
}
function loadMovies(){
    let movies = JSON.parse(localStorage.getItem('movies'))
    for (let i = 0; i<movies.length; i++){
       addToList(movies[i])
    }
}
function addToList(Movie){
    let div = document.createElement('div')
    div.classList.add('movieItem')
    div.innerHTML = `<img src="${Movie.iamgeUrl}" alt="Error Loading Image" class="imageItem">
    <div class="para">
        <p class="movieName">${Movie.movieTitle}</p>
        <p class="publisher">by ${Movie.moviePublisher}</p>
    </div>`
    document.getElementById('movieList').appendChild(div)
}
loadMovies()
function clear(){
    localStorage.removeItem('movies')
    document.getElementById('movieList').innerHTML = ''

}
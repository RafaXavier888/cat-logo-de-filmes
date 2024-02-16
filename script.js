function showGenre(genre) {
    // seleciona todos os elementos da classe "movie-cards"
    var movies = document.getElementsByClassName("movie-card");
    // percorre todos os elementos
    for (var i = 0; i < movies.length; i++) {
      // obtém a lista de gêneros do elemento
      var genres = movies[i].getAttribute("data-genre").split(",");
      // verifica se o gênero passado como parâmetro está na lista
      if (genres.includes(genre)) {
        // se sim, mostra o elemento
        movies[i].style.display = "block";
      } else {
        // se não, esconde o elemento
        movies[i].style.display = "none";
      }
    }
  }
  
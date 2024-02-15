// Função para mostrar apenas os filmes do gênero selecionado
function showGenre(genre) {
  // Seleciona todos os cartões de filme
  var movieCards = document.querySelectorAll('.movie-card');
  // Itera sobre os cartões de filme
  movieCards.forEach(function(card) {
      // Verifica se o filme pertence ao gênero selecionado
      if (card.innerText.toLowerCase().includes(genre.toLowerCase())) {
          // Mostra o cartão de filme se pertencer ao gênero
          card.style.display = 'block';
      } else {
          // Oculta o cartão de filme se não pertencer ao gênero
          card.style.display = 'none';
      }
  });
}

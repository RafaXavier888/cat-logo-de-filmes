
function showGenre(genre) {
    // Implemente a lógica para exibir os filmes do gênero selecionado
    console.log("Filmes do gênero " + genre);
  }

function toggleSynopsis(element) {
    const synopsis = element.previousSibling;
    synopsis.classList.toggle('show-more');
    element.textContent = synopsis.classList.contains('show-more') ? 'Ler menos' : 'Ler mais';
  }
  
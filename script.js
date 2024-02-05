function toggleSynopsis(element) {
    const synopsis = element.previousSibling;
    synopsis.classList.toggle('show-more');
    element.textContent = synopsis.classList.contains('show-more') ? 'Ler menos' : 'Ler mais';
  }
  
document.addEventListener("DOMContentLoaded", function() {
  displayAllShows();
});

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const _showTemplate =
  `<div class="col {{colSize}}">
    <div class="card">
      <img src="{{imageSrc}}" class="card-img-top" alt="{{title}}">
    </div>
  </div>`;

const _showRowElement =
  document.getElementById("show-row");

const _selectedGenre =
  document.getElementById("selected");

let rowClasses = ["row-cols-1", "row-cols-md-3", "g-4"]

function displayShow(show) {
  _showRowElement.innerHTML = "";
  _showRowElement.classList.remove(...rowClasses);
  let showObj = SHOWS.find(x => x.title === show)
  _selectedGenre.innerText = showObj.genre;
  // let newText = `Try`
  let newColumn = _showTemplate
    .replaceAll("{{imageSrc}}",
      showObj.img)
    .replaceAll("{{title}}",
      showObj.title)
    .replaceAll("{{colSize}}",
      'col-7');
  _showRowElement.insertAdjacentHTML('beforeend', newColumn);
}

function displayAllShows() {
  _showRowElement.innerHTML = "";
  _showRowElement.classList.add(...rowClasses);
  _selectedGenre.innerText = "Genres";
  if (SHOWS.length == 0) {
    _showRowElement.innerHTML = _noMatchingShowsHtml;
    return;
  }
  for (let i = 0; i < SHOWS.length; i++) {
    let newCard =
      _showTemplate
        .replaceAll("{{imageSrc}}",
          SHOWS[i].img)
        .replaceAll("{{title}}",
          SHOWS[i].title)
        .replaceAll("{{colSize}}",
          '');
    _showRowElement
      .insertAdjacentHTML('beforeend', newCard);
  }
}
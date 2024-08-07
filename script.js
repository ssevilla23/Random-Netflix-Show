/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];

function chooseRandomGenre() {
 // Deliverable 1: Your code here 👇
  let genres = ["fantasy", "drama", "comedy"];
  let index = getRandomNumber(0, 2);
  return genres[index];
}

function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  let index = getRandomNumber(0, 4);
  
  if (genre === "random") {
    genre = chooseRandomGenre();
  }
  
  if (genre === "fantasy") {
    let show = fantasyShows[index];
    displayShow(show);
  } else if (genre === "comedy") {
    let show = comedyShows[index];
    displayShow(show);
  } else if (genre === "drama") {
    let show = dramaShows[index];
    displayShow(show);
  }
}


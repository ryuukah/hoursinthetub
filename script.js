const nav = document.querySelector(".top-nav");
const slider = document.querySelector(".pink-slider");
const links = document.querySelectorAll(".nav-link");


// =========================
// PINK SLIDING NAVIGATION
// =========================

function moveSlider(link) {

  const navRect = nav.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();

  const left =
    linkRect.left -
    navRect.left;

  slider.style.left = `${left}px`;
  slider.style.width = `${linkRect.width}px`;
}


// Start on PERSONAL
const personalLink = links[0];

moveSlider(personalLink);


// Move pink background when hovering
links.forEach((link) => {

  link.addEventListener("mouseenter", () => {
    moveSlider(link);
  });

});


// Return to PERSONAL when mouse leaves navigation
nav.addEventListener("mouseleave", () => {

  const activeLink =
    document.querySelector(".nav-link.active");

  moveSlider(activeLink);

});


// Keep correct position if window changes size
window.addEventListener("resize", () => {

  const activeLink =
    document.querySelector(".nav-link.active");

  moveSlider(activeLink);

});


// =========================
// SEARCH BAR
// =========================

const searchInput =
  document.getElementById("searchInput");

const searchButton =
  document.getElementById("searchButton");


// These are the answers your search bar knows
const answers = {

  "personal":
    "This is the personal page.",

  "cortis":
    "CORTIS is a co-ed group.",

  "reality":
    "Reality content can be found here.",

  "hello":
    "hello ♡",

  "hi":
    "hi! ♡",

  "who are you":
    "This is my little personal website ♡",

  "about":
    "Welcome to my personal page ♡"

};


// Search function
function search() {

  const question =
    searchInput.value
      .trim()
      .toLowerCase();


  if (question === "") {

    searchInput.value = "";

    searchInput.placeholder = "search...";

    return;
  }


  // Exact answer
  if (answers[question]) {

    searchInput.value =
      answers[question];

    return;
  }


  // Partial matches
  for (const key in answers) {

    if (question.includes(key)) {

      searchInput.value =
        answers[key];

      return;
    }

  }


  // Nothing found
  searchInput.value =
    "I don't know that yet ♡";

}


// Search button
searchButton.addEventListener(
  "click",
  search
);


// Press Enter
searchInput.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Enter") {

      search();

    }

  }
);

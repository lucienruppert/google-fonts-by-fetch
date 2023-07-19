import KNOWN_FONTS from "./fonts.js";

const select = document.querySelector("select");
const defaultOption = document.createElement("option");
select.appendChild(defaultOption);

// CREATE SELECT OPTIONS WITH FONT DATA
KNOWN_FONTS.map((font) => {
  const option = document.createElement("option");
  option.innerText = font.family;
  option.value = `${font.family}, ${font.category}`;
  select.appendChild(option);
});

// HANDLE SELECT CHANGE
const changingText = document.querySelector(".changing-text");
select.addEventListener("change", () => {
  changingText.style.fontFamily = select.value;
});
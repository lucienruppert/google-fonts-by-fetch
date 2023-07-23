import KNOWN_FONTS from "./fonts.js";

// CREATE DATALIST OPTIONS AND FONTS ARRAY
const datalist = document.querySelector(".my-datalist");
const fontsArray = [];
KNOWN_FONTS.map((font) => {
  const option = document.createElement("option");
  option.value = font.family;
  datalist.appendChild(option);
  fontsArray.push([font.family, font.category]);
});

// HANDLE SELECT CHANGE
const input = document.querySelector("input");
const changingText = document.querySelector(".changing-text");
const style = document.querySelector("style");
input.addEventListener("input", (event) => {
  fontsArray.map((fontArray) => {
    if (fontArray[0] === event.target.value) {
      changingText.style.fontFamily = fontArray;
      event.target.value = "";
      const importRule = `@import url("https://fonts.googleapis.com/css2?family=${fontArray[0]}&family=Arial&display=swap")`;
      if (!style.innerText.includes(importRule)) 
      style.appendChild(document.createTextNode(importRule));
    }
  });
});

let KNOWN_FONTS = [
  {
    family: "Arial",
    category: "sans-serif",
  },
  {
    family: "Courier New",
    category: "monospace",
  },
  {
    family: "Tahoma",
    category: "Tahoma, sans-serif",
  },
  {
    family: "Tangerine",
    category: "serif",
  },
  {
    family: "Trebuchet MS",
    category: "sans-serif",
  },
  {
    family: "Verdana",
    category: "sans-serif",
  },
];

// GET ALL FONTS
async function fetchGoogleFonts() {
  const response = await fetch(
    `https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=AIzaSyCBeWBsvyXQ4nemkkodNU2FVNiTcA0SpX8`
  );
  const data = await response.json();
  return data;
}
const fetchedData = await fetchGoogleFonts();
const filteredData = fetchedData.items.map(font => {
  return {family: font.family, category: font.category}
});
KNOWN_FONTS = filteredData;

export default KNOWN_FONTS;

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

try {
  const fetchedData = await fetchGoogleFonts();
  const filteredData = fetchedData.items.map(font => {
    return {family: font.family, category: font.category}
  });
  KNOWN_FONTS = filteredData;
} catch (error) {
  alert(`I'm sorry, the following error occured: ${error}. Please try again.`)
}

export default KNOWN_FONTS;

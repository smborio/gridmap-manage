// Define the XML namespace for SVG
const svgNS = "http://www.w3.org/2000/svg";

// Get the SVG element with the ID "grid" from the HTML document
const svg = document.getElementById("grid");

// Define the size of the grid
const gridSize = 20; 

// Define the size of each grid square
const squareSize = 40; 

// Create grid
for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", i * squareSize);
    rect.setAttribute("y", j * squareSize);
    rect.setAttribute("width", squareSize);
    rect.setAttribute("height", squareSize);
    rect.setAttribute("stroke", "black");
    rect.setAttribute("fill", "none");
    svg.appendChild(rect);
  }
}
// Define the XML namespace for SVG
const svgNS = "http://www.w3.org/2000/svg";

// Get the SVG element with the ID "grid" from the HTML document
const svg = document.getElementById("grid");

// Define the size of the grid
const gridWidth = 10;
const gridHeight = 15;

// Define the size of each grid square
const squareSize = 50;

// Define the padding around the grid
const padding = 5;

// Create grid
for (let i = 0; i <= gridWidth; i++) {
    const verticalLine = document.createElementNS(svgNS, "line");
    verticalLine.setAttribute("x1", padding + i * squareSize);
    verticalLine.setAttribute("y1", padding);
    verticalLine.setAttribute("x2", padding + i * squareSize);
    verticalLine.setAttribute("y2", padding + gridHeight * squareSize);
    svg.appendChild(verticalLine);
}

for (let i = 0; i <= gridHeight; i++) {
    const horizontalLine = document.createElementNS(svgNS, "line");
    horizontalLine.setAttribute("x1", padding);
    horizontalLine.setAttribute("y1", padding + i * squareSize);
    horizontalLine.setAttribute("x2", padding + gridWidth * squareSize);
    horizontalLine.setAttribute("y2", padding + i * squareSize);
    svg.appendChild(horizontalLine);
}

// src/index.js
import { makeLineRoughOnClick } from './utils/gridUtils.js';

// Call the function
makeLineRoughOnClick();
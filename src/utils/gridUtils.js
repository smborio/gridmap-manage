// function that makes a line rough on click
function makeLineRoughOnClick() {
    // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Select all line elements
        var lines = document.querySelectorAll('line');

        // Add a click event listener to each line
        lines.forEach(function(line) {
            line.addEventListener('click', function() {
                // Add the filter to the clicked line
                line.setAttribute('filter', 'url(#rough)');
            });
        });
    });
}

// Export the function so it can be used in other files
export { makeLineRoughOnClick };
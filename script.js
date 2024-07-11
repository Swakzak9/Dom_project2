function getRandomColor() {
    // Generating a random hexadecimal color code
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the color of the box
function changeBoxColor() {
    var colorBox = document.getElementById('colorBox');
    var newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
}

// Event listener for the button click
document.getElementById('changeColorBtn').addEventListener('click', changeBoxColor);
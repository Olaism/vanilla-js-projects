const hex_alpha = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

const color = document.getElementById('color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let bgColor = getColor();
    const body = document.body;
    body.style.backgroundColor = bgColor;
    color.textContent = bgColor;
})

color.addEventListener('click', function(e) {
    let color = e.currentTarget.textContent;
    navigator.clipboard.writeText(color);
    alert("Color copied to clipboard");
})

function getColor() {
    hex_color = '#';
    for (let i = 0; i < 6; i++) {
        hex_color += hex_alpha[getRandomValue(hex_alpha)];
    }
    return hex_color;
}

function getRandomValue(values) {
    return Math.floor(Math.random() * values.length);
}
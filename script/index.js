document.addEventListener('DOMContentLoaded', () => {
    launchApp();
});

let launchApp = () => {
    drawTriangle();
    slider();
};

let drawTriangle = () => {
    var canvasElement = document.querySelector("#canvas");
    var context = canvasElement.getContext("2d");

    // the triangle
    let height = 200 * Math.cos(Math.PI / 6);

    context.beginPath();
    context.moveTo(100, 300);
    context.lineTo(300, 300);
    context.lineTo(200, 300 - height);
    context.closePath();

    // the outline
    context.lineWidth = 10;
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = "#1396ea";
    context.fill();
};

let slider = () => {
    // get the slider and the p inside the div
    let slider = document.querySelector("#slider");
    let p = document.querySelector('.value').children[0]; 
    
    // add the event listener
    slider.addEventListener("input", function() {
        p.textContent = slider.value;
    })
};

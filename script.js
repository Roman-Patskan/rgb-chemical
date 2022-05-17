let colors = ["00", "22", "44", "66", "77", "99",];
let colorParts = ["00", "00", "00"];
colors.reverse()
console.log(colors);

let colorBoxRed = document.getElementById("color-red");
let colorBoxGreen = document.getElementById("color-green");
let colorBoxBlue = document.getElementById("color-blue");
let wrapperElement = document.getElementById("wrapper");

function createElement(colorBox, index, item) {
    let colorElement = document.createElement("p");
    colorElement.textContent = item;
    colorElement.classList.add("control");
    colorElement.dataset.index = index;
    colorBox.insertAdjacentElement('beforeend', colorElement);

}
colors.forEach((item) => {
    createElement(colorBoxRed, 0, item);
});


colors.forEach((item) => {
    createElement(colorBoxGreen, 1, item);
});

colors.forEach((item) => {
    createElement(colorBoxBlue, 2, item);
});

wrapperElement.addEventListener('click', (event) => {
    let currentClass = event.target.className;
    if (currentClass == 'control') {
       
        colorParts [event.target.dataset.index] = event.target.textContent;
  
        let newColor = "#" + colorParts[0] + colorParts[1] + colorParts[2];
        console.log(newColor);
    };
})



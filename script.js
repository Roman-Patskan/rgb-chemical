let colors = ["00", "22", "44", "66", "77", "99", "ff"];
colors.reverse()
console.log(colors);

let colorBoxRed = document.getElementById("color-red");
let colorBoxGreen = document.getElementById("color-green");
let colorBoxBlue = document.getElementById("color-blue");

colors.forEach((item) => {
    let colorElement = document.createElement("p");
    colorElement.textContent = item;
    colorElement.classList.add("control");
    colorElement.dataset.index = "0";
    colorBoxRed.insertAdjacentElement('beforeend', colorElement);
    });


colors.forEach((item) => {
    let colorElement = document.createElement("p");
    colorElement.textContent = item;
    colorElement.classList.add("control");
    colorElement.dataset.index = "1";
    colorBoxGreen.insertAdjacentElement('beforeend', colorElement);
    
});

colors.forEach((item) => {
    let colorElement = document.createElement("p");
    colorElement.textContent = item;
    colorElement.classList.add("control");
    colorElement.dataset.index = "2";
    colorBoxBlue.insertAdjacentElement('beforeend', colorElement);
   
});



const colorParts = ["3A", "C7", "50"];
const cloudPath = document.querySelector('#cloud-path');
const textElement = document.querySelector('.text');
const colorBoxRed = document.getElementById("color-red");
const colorBoxGreen = document.getElementById("color-green");
const colorBoxBlue = document.getElementById("color-blue");
const wrapperElement = document.getElementById("wrapper");
const colorBoxes = [colorBoxRed, colorBoxGreen, colorBoxBlue];

function colorChange() {
    let newColor = "#" + colorParts[0] + colorParts[1] + colorParts[2];
    cloudPath.style.fill = newColor;
    textElement.innerHTML = newColor;
}

colorChange();

wrapperElement.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const currentClass = clickedElement.className;
    if (currentClass == 'control') {
        removeActiveClasses(clickedElement.dataset.index);
        clickedElement.classList.add("active");
        colorParts[clickedElement.dataset.index] = clickedElement.textContent;
        colorChange();
    };
});


function removeActiveClasses(index) {
    const elements = colorBoxes[index].querySelectorAll('.active')
    elements.forEach((item) => {
        item.classList.remove('active');
    })
}

const year = prompt('ведіть рік свого народження')            
  const calendarYear = 2022                                     
  const age = calendarYear - year                               
  alert('я думаю вам ' + age + ' років')                        
  prompt('введіть своє імя')                                    
  alert('я тут подумав навіщо мені твоє імя')

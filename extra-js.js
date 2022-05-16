// створюємо пустий масив
const rgb = [];

// знаходимо всі елементи з класом .table
const elements = document.querySelectorAll('.capsulas-box');

// проходимось по кожному елементу масиву
elements.forEach(el => {
    const activeElement = el.querySelector('.control.active');
    
    const currentNumber = activeElement.innerText;

    // додаємо новий елемент в масив
    
    rgb.push(currentNumber);
});

// формуємо значення нового кольору:
// 1. склеюємо елементи масиву
let newColor = rgb.join('');
// 2. додаємо на початок елемент #
newColor = '#' + newColor;

// знаходимо елемент з id cloud-path
const cloudPath = document.querySelector('#cloud-path');
// міняємо для елементу fill
cloudPath.style.fill = newColor;

// додаємо click listener

document.querySelector('.capsulas-wrapper').addEventListener('click', function(event) {

    if (event.target.classList.contains('control')) {  
        const text = event.target.innerText;
        const index = event.target.dataset.index;

        const tables = document.querySelectorAll('.capsulas-box');
        const currentTable = tables[index];
        const currentTableControls = currentTable.querySelectorAll('.control');
        currentTableControls.forEach((el) => {
            el.classList.remove('active');
        });

        rgb[index] = text;

        let newColor = rgb.join('');
        newColor = '#' + newColor;

        cloudPath.style.fill = newColor;

        event.target.classList.add('active');
    }
});
// вешаем прослушку по всем элементам массива
const headers = document.querySelectorAll("[data-name = 'accordeon-title']");
console.log(headers);
// вешаем clic на каждый элемент
headers.forEach(function (item) {
    console.log(item);
    // находим следующий элемент и добовл. или убираем класс hidden 
    item.addEventListener('click', function () {
        console.log(this);
        console.log(this.nextElementSibling);
        this.nextElementSibling.classList.toggle('hidden');
    })     
})

/*
// створюємо пустий масив
const cmyk = [];

// знаходимо всі елементи з класом .table
const cmykElements = document.querySelectorAll('.pot-box');

// проходимось по кожному елементу масиву
elements.forEach(el => {
    const activsElements = el.querySelector('.controls.activs');
    
    const currentNumber = activsElements.innerText;

    // додаємо новий елемент в масив
    
    cmyk.push(currentNumber);
});

// формуємо значення нового кольору:
// 1. склеюємо елементи масиву
let cmykColor = cmyc.join('');
// 2. додаємо на початок елемент #
cmykColor = '#' + cmykColor;

// знаходимо елемент з id cloud-path
const cloudPath = document.querySelector('#cloud-path');
// міняємо для елементу fill
cloudPath.style.fill = cmykColor;

// додаємо click listener

document.querySelector('.pot-wrapper').addEventListener('click', function(event) {

    if (event.target.classList.contains('controls')) {  
        const text = event.target.innerText;
        const index = event.target.dataset.index;

        const tables = document.querySelectorAll('.pot-box');
        const currentTable = tables[index];
        const currentTableControls = currentTable.querySelectorAll('.controls');
        currentTableControls.forEach((el) => {
            el.classList.remove('activs');
        });

        cmyk[index] = text;

        let cmykColor = cmyc.join('');
        cmykColor = '#' + cmykColor;

        cloudPath.style.fill = cmykColor;

        event.target.classList.add('activs');
    }
});
*/
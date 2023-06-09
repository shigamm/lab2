let figuresList = document.querySelectorAll('.figures__item');
let counterFigures = document.querySelector('.figures-click__counter span');
k = 0
for (let item of figuresList) {
    item.addEventListener('click', () => {
        if(item.classList.contains('figure-click')) {
            item.classList.remove('figure-click');
            k--;
        }
        else {
            item.classList.add('figure-click');
            k++;
            counterFigures.innerHTML = k
        }
        item.classList.add('pulse');
    })
    item.addEventListener('dblclick', () => {
        item.classList.remove('pulse');
    })
}


let addSquare = document.querySelector('.add__square');
let addCircle = document.querySelector('.add__circle');
let addOval = document.querySelector('.add__oval');
let addRhombus = document.querySelector('.add__rhombus');
let clear = document.querySelector('.clear');
let addedFigures = document.querySelector('.added__figures');


addSquare.addEventListener('click', () => {
    let elem = document.createElement("div");
    elem.classList.add('figures__item','square');
    addedFigures.appendChild(elem);
});

addCircle.addEventListener('click', () => {
    let elem = document.createElement("div");
    elem.classList.add('figures__item','circle');
    addedFigures.appendChild(elem);
});

addOval.addEventListener('click', () => {
    let elem = document.createElement("div");
    elem.classList.add('figures__item','oval');
    addedFigures.appendChild(elem);
});

addRhombus.addEventListener('click', () => {
    let elem = document.createElement("div");
    elem.classList.add('figures__item','rhombus');
    addedFigures.appendChild(elem);
});

clear.addEventListener('click', () => {
    addedFigures.innerHTML = ''
});

const modalBtn = document.querySelector('.btn-modal');
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);

const modalWrapper = document.querySelector(".modal-wrapper");
const modalClose = document.querySelector(".modal-close");
const modalActive = document.querySelector(".modal-active");

modalBtn.addEventListener("click", function () {
    modalWrapper.style.display = "block";
    modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
});

modalClose.addEventListener("click", function () {
    modalWrapper.style.display = "none";
});
modalWrapper.addEventListener("click", function (event) {
    if (event.target === modalWrapper) {
        modalWrapper.style.display = "none";
    }
});

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderNext = document.querySelector('.slider-next')
const sliderPrev = document.querySelector('.slider-prev')

sliderNext.addEventListener('click', function(){
    offset = offset + 300;
    sliderPrev.disabled = false
    if (offset > 300) {
        sliderNext.disabled = true
    }
    sliderLine.style.left = -offset + 'px';
});

sliderPrev.addEventListener('click', function () {
    offset = offset - 300;
    sliderNext.disabled = false
    if (offset < 300) {
        offset = 0;
        sliderPrev.disabled = true
    }
    sliderLine.style.left = -offset + 'px';
});
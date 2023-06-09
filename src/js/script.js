import $ from "jquery";
import '../scss/style.scss'
import 'bootstrap/dist/js/bootstrap'


window.bootstrap = require('bootstrap');
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}

var currentModal = 0;
let modalText = [`<p>1. Lorem ipsum dolor sit amet, consectetur <span data-bs-toggle="tooltip" data-bs-placement="bottom"
         title="Подсказка внизу">подсказка</span> adipisicing elit.
         Ad, aliquid.</p>
    `, `<p>2. Lorem ipsum dolor sit amet, consectetur <span data-bs-toggle="tooltip" data-bs-placement="bottom"
         title="Подсказка внизу">подсказка</span> adipisicing elit.
         Ad, aliquid.</p>
    `, `<p>3. Lorem ipsum dolor sit amet, consectetur <span data-bs-toggle="tooltip" data-bs-placement="bottom"
         title="Подсказка внизу">подсказка</span> adipisicing elit.
         Ad, aliquid.</p>
    `, `<p>4. Lorem ipsum dolor sit amet, consectetur <span data-bs-toggle="tooltip" data-bs-placement="bottom"
         title="Подсказка внизу">подсказка</span> adipisicing elit.
         Ad, aliquid.</p>
    `, `<p>5. Lorem ipsum dolor sit amet, consectetur <span data-bs-toggle="tooltip" data-bs-placement="bottom"
         title="Подсказка внизу">подсказка</span> adipisicing elit.
         Ad, aliquid.</p>
    `,]
var modalCount = modalText.length;
var exampleModal = document.getElementById('exampleModal')

function showInfo(i) {
    i = (Number(i) + Number(modalCount)) % Number(modalCount);
    var modalParagraph = exampleModal.querySelector('.modal-body');
    let text = modalText[i];
    modalParagraph.innerHTML = text;
    currentModal = i;
    var modalTitle = exampleModal.querySelector('.modal-title')
    var c = Number(i) + Number(1);
    modalTitle.textContent = 'Modal ' + c;
}


exampleModal.addEventListener('show.bs.modal', function (event) {
    let button = event.relatedTarget

    let num = button.getAttribute('data-bs-num')
    showInfo(num);
});
exampleModal.addEventListener("keydown", event => {
    if (event.code === "ArrowLeft") {
        showInfo(Number(currentModal) - Number(1));
    } else if (event.code === "ArrowRight") {
        showInfo(Number(currentModal) + Number(1));
    }
});

let toastElList = [].slice.call(document.querySelectorAll('.toast'))
let toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, {delay: 10000})
});
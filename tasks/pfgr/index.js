// найти первые N троек чисел, таких что каждая тройка чисел составит стороны прямоугольного треугольника
// можно использовать только целые числа больше 1

let output = document.getElementById("root");
let limit = document.getElementById("limit");
let start = document.getElementById("start");
let message = document.getElementById("message");
let warning = document.getElementById("warning");
let progressBar = document.getElementById("progress");
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 500;

const myWorker = new Worker('worker.js');

function showResult({data}) {
    let {
        percent,
        result,
        progress,
    } = data;

    if (result) {
        start.disabled = false;
        limit.disabled = false;

        result.forEach((i, index) => {
            output.innerHTML += `
                <div class="triplet">
                    ${index + 1}:
                    <span>${i.toString()}</span>
                </div>`;
        });
    }

    message.innerHTML = `<div>Ищем Пифагоровы тройки...${percent ? (percent + '%') : '0%'}</div>`;

    if (progress) {
        progressBar.value = progress;
    }
}

function startButtonClickHandler() {
    message.innerHTML = '<div>Ищем Пифагоровы тройки...</div>';
    output.innerHTML = '';
    progressBar.value = 0;
    myWorker.postMessage(limit.value);
    start.disabled = true;
    limit.disabled = true;
}

function selectLimitClickHandler(e) {
    if (+e.target.value === 2000) {
        warning.innerHTML = 'Внимание: может занять долгое время.';
    }
}

function drawOnCanvas(triplet) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(20, 400 - triplet[0]);
    ctx.lineTo(20, 400);
    ctx.lineTo(20 + triplet[1], 400);
    ctx.closePath();
    ctx.stroke();
}

function outputClickHandler(e) {
    let triplet = e.target.innerHTML.split(',').map(i => +i);

    if (!isNaN(triplet[0]) && !isNaN(triplet[1]) && !isNaN(triplet[2])) {
        drawOnCanvas(triplet);
    }
}

function init() {
    start.addEventListener("click", startButtonClickHandler);
    limit.addEventListener("change", selectLimitClickHandler);
    myWorker.onmessage = showResult;
    output.addEventListener("click", outputClickHandler)
}

init();

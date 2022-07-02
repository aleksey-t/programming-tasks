// найти первые N троек чисел, таких что каждая тройка чисел составит стороны прямоугольного треугольника
// можно использовать только целые числа больше 1

let output = document.getElementById("root");
let limit = document.getElementById("limit");
let start = document.getElementById("start");
let message = document.getElementById("message");

const myWorker = new Worker('worker.js');

function showResult({data}) {
    let {
        percent,
        result,
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
}

function startButtonClickHandler() {
    message.innerHTML = '<div>Ищем Пифагоровы тройки...</div>';
    output.innerHTML = '';
    myWorker.postMessage(limit.value);
    start.disabled = true;
    limit.disabled = true;
}

function init() {
    start.addEventListener("click", startButtonClickHandler);
    myWorker.onmessage = showResult;
}

init();

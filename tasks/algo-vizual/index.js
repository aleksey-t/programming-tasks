let drawingTime = 7;

function renderCanvas(ID, gap) {
    const canvas = document.querySelector(ID);
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#777";
    ctx.strokeStyle = "#555";
    let x = 0;
    let y = 0;
    let size = 200;
    let offsetX = 400;
    let offsetY =400;

    let dots = [];

    for (let i = 0; i < drawingTime; i += .01) {
        dots.push(
            {
                x: Math.floor(offsetX + Math.cos(x) * size / 2 + Math.cos(i) * size),
                y: Math.floor(offsetY + Math.sin(x) * size / 2 + Math.sin(i) * size),
            }
        );
        x += gap;
    }

    let i = 0;

    function step(i) {
        ctx.beginPath();
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[i + 1].x, dots[i + 1].y);
        ctx.stroke();
        ctx.closePath();
        i++;

        if (i < dots.length - 1) {
            window.requestAnimationFrame(() => step(i));
        }
    }


    window.requestAnimationFrame(() => step(i));
}

renderCanvas('#canvas-1', 1);
renderCanvas('#canvas-2', 2);
renderCanvas('#canvas-3', 3);
renderCanvas('#canvas-4', 4);
renderCanvas('#canvas-5', 5);
renderCanvas('#canvas-6', 6);
renderCanvas('#canvas-7', 7);
renderCanvas('#canvas-8', 8);
renderCanvas('#canvas-9', 9);
renderCanvas('#canvas-10', 10);
renderCanvas('#canvas-11', 11);
renderCanvas('#canvas-12', 12);
renderCanvas('#canvas-13', 13);
renderCanvas('#canvas-14', 14);
renderCanvas('#canvas-15', 15);
renderCanvas('#canvas-16', 16);
renderCanvas('#canvas-17', 17);
renderCanvas('#canvas-18', 18);
renderCanvas('#canvas-19', 19);
renderCanvas('#canvas-20', 20);
renderCanvas('#canvas-21', 21);
renderCanvas('#canvas-22', 22);
renderCanvas('#canvas-23', 23);
renderCanvas('#canvas-24', 24);

const canvasIDs = [
    {
        element: '#canvas-1',
        gap: 1
    },
    {
        element: '#canvas-2',
        gap: 2
    },
    {
        element: '#canvas-3',
        gap: 3
    },
    {
        element: '#canvas-4',
        gap: 4
    },
    {
        element: '#canvas-5',
        gap: 5
    },
    {
        element: '#canvas-6',
        gap: 6
    },
    {
        element: '#canvas-7',
        gap: 7
    },
    {
        element: '#canvas-8',
        gap: 8
    },
    {
        element: '#canvas-9',
        gap: 9
    },
    {
        element: '#canvas-10',
        gap: 10
    },
    {
        element: '#canvas-11',
        gap: 11
    },
    {
        element: '#canvas-12',
        gap: 12
    },
    {
        element: '#canvas-13',
        gap: 13
    },
    {
        element: '#canvas-14',
        gap: 14
    },
    {
        element: '#canvas-15',
        gap: 15
    },
    {
        element: '#canvas-16',
        gap: 16
    },
    {
        element: '#canvas-17',
        gap: 17
    },
    {
        element: '#canvas-18',
        gap: 18
    },
    {
        element: '#canvas-19',
        gap: 19
    },
    {
        element: '#canvas-20',
        gap: 20
    },
    {
        element: '#canvas-21',
        gap: 21
    },
    {
        element: '#canvas-22',
        gap: 22
    },
    {
        element: '#canvas-23',
        gap: 23
    },
    {
        element: '#canvas-24',
        gap: 24
    },
];

canvasIDs.forEach(cID => {
    document.querySelector(cID.element).addEventListener("click", function () {
        renderCanvas(cID.element, cID.gap);
    });
});

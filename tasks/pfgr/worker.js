onmessage = function (e) {
    let triplets = [];

    function findTriplets(limit) {
        let a, b, c;

        for (a = 2; a <= limit; a += 1) {
            for (b = a; b <= limit; b += 1) {
                let cSquared = a * a + b * b;

                c = Math.sqrt(cSquared);

                if (Number.isInteger(c)) {
                    triplets.push([a, b, c]);
                }

                postMessage({
                    percent: Math.floor(a / (limit / 100)),
                });
            }
        }

        postMessage({
            result: triplets,
            percent: 100,
        });
    }

    findTriplets(e.data);
}

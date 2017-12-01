var fs = require('fs');

// Read the input data
fs.readFile('data.txt', 'UTF-8', (err, data) => {
    if (err) {
        throw new Error(err);
    }

    solvePart1(data);
    solvePart2(data);
});


function solvePart1(data) {
    var totalSum = Array.from(data).reduce((currentSum, value, i) => {
        // Compute the next index to check
        // If it's the last digit, we need to go back at the beginning
        var nextIndex = (i + 1) % (data.length);

        // If the next digit is the same, we add it.
        if (Number(value) == Number(data[nextIndex])) {
            currentSum += Number(value);
        }

        return currentSum;
    }, 0);

    console.log(`Part #1 answer: ${totalSum}`);
}

function solvePart2(data) {
    var totalSum = Array.from(data).reduce((currentSum, value, i) => {
        // Compute the next index to check
        // If it's the last digit, we need to go back at the beginning
        var nextIndex = (i + (data.length / 2)) % (data.length);

        // If the next digit is the same, we add it.
        if (Number(value) == Number(data[nextIndex])) {
            currentSum += Number(value);
        }

        return currentSum;
    }, 0);

    console.log(`Part #2 answer: ${totalSum}`);
}
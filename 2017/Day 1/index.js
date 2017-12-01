var fs = require('fs');

// Read the input data
fs.readFile('data.txt', 'UTF-8', (err, data) => {
    if (err) { throw new Error(err); }

    // Solves part one
    // Current digit is compared to the next one (modulo to reset to 0 if you are at the end of the list)
    var partOneAnswer = solver(data, (currentIndex, totalLength) => (currentIndex + 1) % totalLength);

    // Solves part two
    // Current digit is compared to the digit halfway around the circular list (modulo to reset to 0 if you are at the end of the list)
    var partTwoAnswer = solver(data, (currentIndex, totalLength) => (currentIndex + (totalLength / 2)) % totalLength);

    console.log(`Part one: ${partOneAnswer}`);
    console.log(`Part two: ${partTwoAnswer}`);
});


function solver(data, computeNextValue) {
    return Array.from(data).reduce((currentSum, value, i) => {
        // Compute the next index to check based on the challenge
        var nextIndex = computeNextValue(i, data.length);

        // If the next digit is the same, we add it.
        if (Number(value) == Number(data[nextIndex])) {
            currentSum += Number(value);
        }

        return currentSum;
    }, 0);
}
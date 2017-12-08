var fs = require('fs');

// Read the input data
fs.readFile('2017/Day 5/data.txt', 'UTF-8', (err, data) => {
    if (err) { throw new Error(err); }

    // Format the data
    var jumpInstructions = data.split('\n').map(line => Number(line));

    console.log(`Part one: ${solver(jumpInstructions.slice(0), (jumpInstructions, index) => jumpInstructions[index]++)}`);
    console.log(`Part two: ${solver(jumpInstructions.slice(0), (jumpInstructions, index) => jumpInstructions[index] >= 3 ? jumpInstructions[index]-- : jumpInstructions[index]++)} `);
});

function solver(jumpInstructions, computeOffset) {
    var numberOfSteps = 0, step = 0;

    // Step through each instruction, adding the offset each time.
    while (step >= 0 && step < jumpInstructions.length) {
        step += computeOffset(jumpInstructions, step);
        numberOfSteps++;
    }

    return numberOfSteps;
}
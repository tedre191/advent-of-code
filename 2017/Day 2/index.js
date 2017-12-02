var fs = require('fs');

// Read the input data
fs.readFile('data.txt', 'UTF-8', (err, data) => {
    if (err) { throw new Error(err); }

    // Formating the data into an array[][] of numbers
    formattedData = data.split('\n').map((row) => {
        return row.split('\t').map((value) => Number(value));
    });

    // Gets the total of all the differences between the largest 
    // value and the smallest value of each rows.
    var partOneAnswer = formattedData.reduce((total, row) => total += (Math.max(...row) - Math.min(...row)), 0);

    // Gets the only two numbers in each row where one evenly divides the other and add them together.
    var partTwoAnswer = formattedData.reduce((total, row) => total += row.reduce((division, value) => {
        // Test each value to see if one evenly divides the other
        var d = row.find(v => v != value && v % value == 0);
        return division += d != undefined ? d / value : 0;
    }, 0), 0);

    console.log(`Part one: ${partOneAnswer}`);
    console.log(`Part two: ${partTwoAnswer}`);
});
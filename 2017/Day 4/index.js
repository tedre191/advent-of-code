var fs = require('fs');

// Read the input data
fs.readFile('data.txt', 'UTF-8', (err, data) => {
    if (err) { throw new Error(err); }

    // Get the list of passphrases
    var listOfPassphrases = data.split('\r\n');

    console.log(`Part one: ${solver(listOfPassphrases, false).length}`);
    console.log(`Part two: ${solver(listOfPassphrases, true).length}`);
});

function solver(listOfPassphrases, checkForAnagrams) {
    if (checkForAnagrams) {
        // First pass if we need to also check for anagrams
        listOfPassphrases = solver(listOfPassphrases, false);
    }

    return listOfPassphrases.reduce((listOfValidPassPhrases, passphrase) => {
        var isValid = true;

        // Check each word for a duplicate
        passphrase.split(' ').reduce((words, word) => {

            // If we need to check for anagrams, we should first sort the password
            word = checkForAnagrams ? Array.from(word).sort().join('') : word;

            if (words.indexOf(word) != -1) {
                isValid = false;
            } else {
                words.push(word);
            }

            return words;
        }, []);

        // Add the valid passphrase to the list
        if (isValid) {
            listOfValidPassPhrases.push(passphrase);
        }

        return listOfValidPassPhrases;
    }, []);
}
var fs = require('fs');

// Read the input data
fs.readFile('data.txt', 'UTF-8', (err, data) => {
    if (err) { throw new Error(err); }

    // Return the list of valid passphareses
    var listOfValidPassPhrases = data.split('\r\n').reduce((listOfValidPassPhrases, passphrase) => {
        var isValid = true;
        // Check each word for a duplicate
        passphrase.split(' ').reduce((words, word) => {
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

    console.log(`Part one: ${listOfValidPassPhrases.length}`);


    // From the list of validPassPhrases, reject those how are anagrams of each other
    listOfValidPassPhrases = listOfValidPassPhrases.reduce((passphraseWithoutAnagrams, passphrase) => {
        var isValid = true;
        // Check each word for a duplicate
        passphrase.split(' ').reduce((words, word) => {

            // Sort the word so anagrams are identical
            word = Array.from(word).sort().join('');
            if (words.indexOf(word) != -1) {
                isValid = false;
            } else {
                words.push(word);
            }

            return words;
        }, []);

        // Add the valid passphrase to the list
        if (isValid) {
            passphraseWithoutAnagrams.push(passphrase);
        }

        return passphraseWithoutAnagrams;
    }, []);

    console.log(`Part two: ${listOfValidPassPhrases.length}`);
});
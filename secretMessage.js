let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// remove the last string of the array
console.log(secretMessage.length);
secretMessage.pop()
console.log(secretMessage.length);

// add to list with push()
secretMessage.push('to', 'Program');
// console.log(secretMessage);

// change a word via index
secretMessage[secretMessage.indexOf('easily')] = "right";
// console.log(secretMessage);

// remove first string of array 
secretMessage.shift();
console.log(secretMessage[0]);

// add the string Programming to the beginning of the array
secretMessage.unshift('Programming');
console.log(secretMessage[0]);

// an array method to remove the strings (get, right, the, first, time,), and replace them with the single string know
secretMessage.splice(secretMessage.indexOf('get'), 5, 'know,');
console.log(secretMessage);

// On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(' '));
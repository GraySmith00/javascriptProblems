function addNumbers(a, b, c) {
    return this.firstName + 'just calculated' + (a + b + c);
}

const colt = {
    firstName: 'Colt'
}

console.log(addNumbers.call(colt, 1, 2, 3)); // Colt just calculated 6
addNumbers.apply(colt, [1, 2, 3]); // Colt just calculated 6
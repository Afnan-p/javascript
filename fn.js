function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Invalid input: Both inputs must be numbers.";
    }
    return a + b;
}

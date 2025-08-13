function subtractNumbers(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Invalid input: Both inputs must be numbers.");
        }
        return a - b;
    } catch (error) {
        console.error(error.message);
    }
}

// Example usage
console.log(subtractNumbers(10, 5)); // 5
console.log(subtractNumbers(10, "x")); // Invalid input: Both inputs must be numbers.


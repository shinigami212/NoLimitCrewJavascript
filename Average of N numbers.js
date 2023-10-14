// Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return average;
}

// Main function to take user input and calculate average
function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter the number of elements: ', (n) => {
        let numbers = [];
        let count = 0;

        function inputNumber() {
            if (count < n) {
                readline.question(`Enter number ${count + 1}: `, (num) => {
                    numbers.push(parseFloat(num));
                    count++;
                    inputNumber();
                });
            } else {
                const average = calculateAverage(numbers);
                console.log(`Average of the entered numbers is: ${average}`);
                readline.close();
            }
        }

        inputNumber();
    });
}

// Call the main function to start the program
main();

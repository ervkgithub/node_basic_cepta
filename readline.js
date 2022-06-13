const readline = require('readline');

const read1 = readline.createInterface({input: process.stdin, output: process.stdout});


// 2 numbers
// enter the sum
// if correct - display success message
// if false - ask to enter again - (loop)
const num1 = 5;
const num2 = 6;
let count = 0;

read1.question(`Enter the sum of ${num1} and ${num2}\n`, (userInput) => {
    console.log(`You have entered sum as ${userInput}`);
    if(num1+num2 == userInput) {
        console.log('You have passed this level.');
        read1.close();
    }
    else {
        count = count + 1;
        read1.setPrompt('\nPlz enter again.');
        read1.prompt();
        read1.on('line', (userInput) => {
            if(num1+num2 == userInput) {
                console.log('You have passed this level.');
                read1.close();
            }
            else {
                if(count < 5){
                    count = count + 1;
                    read1.setPrompt('\nPlz enter again.');
                    read1.prompt();
                }
                else {
                    console.log('you have excedded max limit')
                    read1.close();
                }
                
                
            }
        })
    }
})

read1.on('close', () => {
    //console.log('You have passed this level.');
})
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (input) => {
    if(input.length){
        console.log(`Received: ${input.split('').reverse().join('')}`);
    }
});
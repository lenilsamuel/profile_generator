const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = [];

rl.question("What's your name? ", (answer) => {
  result.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    result.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {
      result.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        result.push(answer);
          rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
            result.push(answer);
            rl.question("Which sport is your absolute favourite? ", (answer) => {
              result.push(answer);
             rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              result.push(answer);
              console.log(`Your name is ${result[0]}. You like doing ${result[1]} while listening to ${result[2]}. Your favourite meal is ${result[3]}. Your favourite thing to eat for ${result[3]} is ${result[4]}. Your favourite sport is ${result[5]}. Your superpower is ${result[6]}`);
              rl.close();
            })
          })
        })
      })
    })
  })
})

// onsole.log(`Your name is ${answer[0]}. You like doing ${answer[1]} while listening to ${answer[2]}. Your favourite meal is ${answer[3]}.
//               Your favourite thing to eat for ${answer[3]} is ${answer[4]}. Your favourite sport is ${answer[5]}. Your superpower is ${answer[6]}`);
//                           rl.close();
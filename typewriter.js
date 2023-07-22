const sentence = "hello there from lighthouse labs";

let wordDelay = 0; //set the starting time for the timeout as 0
for (const char of sentence) {
  setTimeout(() => {
    //timeout to print each character
    process.stdout.write(char);
  }, wordDelay); //call the delay variable to increase the time, rather than give a starting number
  wordDelay += 50; //go up in 50 millisecond increments
}
setTimeout(() => {
  //secondary timeout to add a new line at the end and fix the bug shown
  process.stdout.write("\n");
}, 50 * sentence.length); //final timeout is the length of the sentence times one more 50 second increment

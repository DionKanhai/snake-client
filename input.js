// setup interface to handle user input from stdin (standard input)
// allows us to listen for keyboard input and react to it

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // event listener 
  stdin.on('data', handleUserInput);
  
  return stdin;
};

// terminate the game when ctrl+c is entered by user
const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    } 
};

// export variable
module.exports = {

setupInput

};
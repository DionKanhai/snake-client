// setup interface to handle user input from stdin (standard input)
// allows us to listen for keyboard input and react to it
const { stdin } = require("process");
const { INPUTKEYS } = require('./constants');

// Stores the active TCP connection object
let connection;

// create a function that will take in user input 
// and relay it to the server
const setupInput = function (conn) {
  // ref the conn object in client file 
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // event listener 
  stdin.on('data', handleUserInput);
  return stdin;
};

// keyboard user input
const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    };
     // if key is in inputkey object then send to server   
    if (INPUTKEYS[key]) {
      const command = INPUTKEYS[key]
      connection.write(command)
    }
};

// export variable
module.exports = {

setupInput

};


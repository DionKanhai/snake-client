// import Node's net lib 
const net = require('net');
// use ES6 shorthand syntax to import object containing 
// connect function in client file
const { connect } = require('./client');


connect();

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

setupInput();
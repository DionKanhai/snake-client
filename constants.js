// variables to store IP and Port
const IP = 'localhost';
const PORT = 50541;

// object for user input keys
const INPUTKEYS = {
  'w': 'Move: up',
  'a': 'Move: left',
  's': 'Move down', 
  'd': 'Move right',
  '#': 'Say: NOO',
  'h': 'Say: HI!'
}

// export the constants
module.exports = {
  IP, 
  PORT, 
  INPUTKEYS
};


// import Node's net lib 
const net = require('net');

// Import object containing connect 
//and setupInput functions from their respective files
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');

// pass the object returned from connect to setupInput
setupInput(connect());
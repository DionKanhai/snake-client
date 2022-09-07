// import Node's net lib 
const net = require('net');
// use ES6 shorthand syntax to import object containing 
// connect and setupInput functions from their respective files
const { connect } = require('./client');
const { setupInput } = require('./input')

console.log('Connectiong ...');
connect();

setupInput();
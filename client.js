// import Node's net lib 
const net = require('net');

// establishes a connection with the game server
// used createConnection (found in the net lib) to create 
// an object named conn 

// the conn object represents the CONNECTION you have
// with the server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', 
    port: 50541
  });
  
  //event handler that receives data from the server to the client
  conn.on('data', (data) => {
    console.log('Server says: ', data)
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};
console.log('Connecting ...');

module.exports = {
    
  connect

};
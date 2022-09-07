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

  // use a connect handler to log message when connected to server
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
    // upon connection adds this name to the server side
    conn.write('Name: DKS');
    // // conn.write sends a message to the server and the server will 
    // // receive the message and know what to do with it
    // setInterval( () => {
    //   conn.write('Move: up')
    // },2000)
    // setInterval( () => {
    //   conn.write('Move: up')
    // },3000)
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
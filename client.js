// import Node's net lib
const net = require('net');

const { IP, PORT } = require('./constants');

// function that creates a connection to the server 
// and the client (in this case the localhost)
const connect = function () {
// conn object represents the connection you have
// with the server
  const conn = net.createConnection({
    host: IP, 
    port: PORT
  });

  // use a connect handler to log message when connected to server
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
    // upon connection adds this name to the server side
    conn.write('Name: DKS');
  });
    
  //event handler that receives data from the server to the client
  conn.on('data', (data) => {
    console.log('Server says: ', data)
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

// enable connect function for export
module.exports = {
    
  connect

};
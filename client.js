
const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // add event listener for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });
  //adding event listener
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Suu");
  });

  return conn;
};

// export the connect function
module.exports = {
  connect,
};

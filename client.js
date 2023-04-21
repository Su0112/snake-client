
const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "172.19.233.129",
    port: 50541,
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
    //conn.write("Move: up");
  });

  return conn;
};



// export the connect function
module.exports = {
  connect,
};

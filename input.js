let connection;
// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
// function to handle user input from stdin
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === '1') {
    connection.write("Say: Hello!");
  } else if (key === '2') {
    connection.write("Say: Bye!");
  }
};

module.exports = {
  setupInput,
};

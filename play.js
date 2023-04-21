const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();
// call the setupInput function to set up stdin
setupInput(conn);

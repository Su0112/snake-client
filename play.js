const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();
// call the setupInput function to set up stdin
setupInput();

const fs = require("fs");
const filePath = "./data.json";

function readData() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// Create
function create(item) {
  const data = readData();
  data.push(item);
  writeData(data);
  console.log("Data written successfully");
}

// Read
function read() {
  const data = readData();
  console.log(data);
}

// Handle CLI arguments
const [, , operation, ...args] = process.argv;

switch (operation) {
  case "read":
    read();
    break;
  case "create":
    const id = parseInt(args[0]);
    const name = args[1];
    create({ id, name });
    break;

  default:
    console.log('Unknown operation. Please use "read".');
    break;
}

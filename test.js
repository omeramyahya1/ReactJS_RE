const fs = require("fs");

fs.appendFile("./src/components/sample.txt", "Appending content", (err) => {
  if (err) throw err;
  console.log("Completed!");
});

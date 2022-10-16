var fs = require("fs");

fs.readFile(`main.html`, "utf8", function (err, data) {
  data ? console.log(data) : console.log(err);
});
